import os
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from PIL import Image, ImageDraw
import random
import os
from typing import Tuple
import subprocess
from googleapiclient.discovery import build



# Configuración del blogger y los token
SCOPES = ['https://www.googleapis.com/auth/blogger']
CLIENT_SECRET_FILE = "client_secret.json"
TOKEN_FILE = "token.json"
# Configuración de la API de Blogger
BLOG_ID = "5927581940525120842"  # Reemplaza con el ID de tu blog
API_KEY = "AIzaSyBE4wbp0h23zad7Xd0AlZp_PUUWfdljNgE"  # Reemplaza con tu clave de API de Blogger
ENDPOINT_BLOGGER = f"https://www.googleapis.com/blogger/v3/blogs/{BLOG_ID}/posts/"

def autenticar():
    """Autentica al usuario utilizando un token almacenado o generando uno nuevo si es necesario."""
    creds = None
    # Reutilizar el token si ya existe y es válido
    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    # Si no hay token o el token ha expirado, se obtiene uno nuevo
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
        # Guardar el token para futuros usos
        with open(TOKEN_FILE, 'w') as token:
            token.write(creds.to_json())
    return creds

# Lo muy importante crear el jardin de las delicias


class JardinDeliciasProcessor:
    def __init__(self, output_dir: str = "./public"):
        """Inicializa el procesador de imágenes.
        
        Args:
            output_dir: Directorio donde se guardarán las imágenes procesadas
        """
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)
        
        # Configuración de parámetros
        self.CROP_WIDTH = 1350
        self.CROP_HEIGHT = 600
        self.NUM_CROPS = 9
        self.BLEND_HEIGHT = 40

    def _validate_image_size(self, image: Image.Image) -> None:
        """Valida que la imagen sea lo suficientemente grande para el procesamiento."""
        width, height = image.size
        if width < self.CROP_WIDTH or height < self.CROP_HEIGHT:
            raise ValueError("La imagen original es demasiado chica para los recortes.")

    def _create_blend_mask(self, width: int, height: int) -> Image.Image:
        """Crea una máscara de difuminado vertical."""
        mask = Image.new("L", (width, height))
        for y in range(height):
            alpha = int(255 * (y / height))
            ImageDraw.Draw(mask).line([(0, y), (width, y)], fill=alpha)
        return mask

    def _blend_images(self, top: Image.Image, bottom: Image.Image, mask: Image.Image) -> Image.Image:
        """Combina dos imágenes usando una máscara de difuminado."""
        return Image.composite(top, bottom, mask)

    def process_image(self, image_path: str, output_name: str) -> str:
        """Procesa la imagen 'El Jardín de las Delicias' creando una versión con múltiples cortes.
        
        Args:
            image_path: Ruta a la imagen original
            output_name: Nombre para la imagen procesada
            
        Returns:
            Ruta donde se guardó la imagen procesada
        """
        # Validar y abrir la imagen
        if not image_path == "El_jardín_de_las_Delicias,_de_El_Bosco.jpg":
            raise ValueError("Esta función solo procesa 'El_jardín_de_las_Delicias,_de_El_Bosco.jpg'")
            
        with Image.open(image_path) as original:
            self._validate_image_size(original)
            
            # Crear imagen final
            final_height = self.CROP_HEIGHT * self.NUM_CROPS
            final_image = Image.new("RGB", (self.CROP_WIDTH, final_height))
            
            # Generar cortes aleatorios
            crops = []
            for _ in range(self.NUM_CROPS):
                max_x = original.size[0] - self.CROP_WIDTH
                max_y = original.size[1] - self.CROP_HEIGHT
                x = random.randint(0, max_x)
                y = random.randint(0, max_y)
                crop = original.crop((x, y, x + self.CROP_WIDTH, y + self.CROP_HEIGHT))
                crops.append(crop)
            
            # Pegar el primer corte
            final_image.paste(crops[0], (0, 0))
            
            # Procesar y pegar los cortes restantes con difuminado
            for i in range(1, self.NUM_CROPS):
                y_destino = i * self.CROP_HEIGHT
                
                # Preparar la parte superior con difuminado
                parte_arriba = crops[i].crop((0, 0, self.CROP_WIDTH, self.BLEND_HEIGHT))
                mask = self._create_blend_mask(self.CROP_WIDTH, self.BLEND_HEIGHT)
                base = final_image.crop((0, y_destino - self.BLEND_HEIGHT, 
                                      self.CROP_WIDTH, y_destino))
                blended = self._blend_images(parte_arriba, base, mask)
                final_image.paste(blended, (0, y_destino - self.BLEND_HEIGHT))
                
                # Pegar el resto del corte
                parte_abajo = crops[i].crop((0, self.BLEND_HEIGHT, 
                                          self.CROP_WIDTH, self.CROP_HEIGHT))
                final_image.paste(parte_abajo, (0, y_destino))
            
            # Guardar la imagen procesada
            output_path = os.path.join(self.output_dir, output_name)
            final_image.save(output_path)
            return output_path
        
carpeta_procesadas = "./public"
# Crear instancia del procesador
processor = JardinDeliciasProcessor()

# Procesar la imagen
try:
    output_path = processor.process_image(
        "El_jardín_de_las_Delicias,_de_El_Bosco.jpg",
        "jardin_procesado.jpg"
    )
    print(f"Imagen procesada guardada en: {output_path}")
except ValueError as e:
    print(f"Error: {e}")

def añadirAGit2zero():
    """Sube todas las imágenes procesadas a GitHub."""
    try:
        # Agregar las imágenes al área de staging
        subprocess.run(["git", "add", carpeta_procesadas], check=True)

        # Realizar el commit
        mensaje_commit = "Subir imágenes generadas y procesadas automáticamente"
        subprocess.run(["git", "commit", "-m", mensaje_commit], check=True)

        # Hacer el push al repositorio remoto
        subprocess.run(["git", "push"], check=True)

        print("Las imágenes se han subido correctamente a GitHub.")
    except subprocess.CalledProcessError as e:
        print(f"Error al ejecutar comandos de Git: {e}")



añadirAGit2zero()

def generarFotos():
    numeroFoto = 146
    bloques_html = []
    tanda_count = 0
    jardin_pc_count = 0

    while numeroFoto <= 247:
        if numeroFoto == 242 :
        
          url1 = f"https://elnuevonuevojardin.netlify.app/{numeroFoto}.mp4"
          url2 = f"https://elnuevonuevojardin.netlify.app/{numeroFoto + 1}.mp4"  

          htmlFoto = f"<div class='tandas'><video src={url1} controls></video><video src={url2} controls></video></div>"

          bloques_html.append(htmlFoto)

        url1 = f"https://elnuevonuevojardin.netlify.app/{numeroFoto}.png"
        url2 = f"https://elnuevonuevojardin.netlify.app/{numeroFoto + 1}.png"  

        htmlFoto = f"<div class='tandas'><img src='{url1}' /><img src='{url2}' /></div>"
        bloques_html.append(htmlFoto)

        

        numeroFoto += 2
        tanda_count += 1

        # Insertar jardín para PC cada 3 tandas
        if tanda_count % 3 == 0:
            jardin_pc = f"<div class='jardines'  ><img class='ElJardinDelH jardin-pc-{jardin_pc_count}' src='https://elnuevonuevojardin.netlify.app/jardin_procesado.jpg' alt='El Jardin Del H' /> </div>"
            bloques_html.append(jardin_pc)
            jardin_pc_count += 1

       

    return "\n".join(bloques_html)


def generar_html_para_blogger():
    
    """Genera el HTML basado en el diseño que proporcionaste."""
    html_contenido = f"""
    <head>
  <title>Las putas putas De Disney Porno Rule 34 NSFW | El Jardín del H</title>
  <meta name="description" content=" solicitado por fans en Telegram. Contenido exclusivo en El Jardín del H.">
  <meta name="keywords" content="Hentai, anime, Yus Lopez, Dragon Ball Z, El Jardín del H, descargar hentai, hentai español,

ver hentai gratis,

hentai sin censura,

videos hentai online,

juegos hentai interactivos,

anime hentai completo,

hentai para adultos,

hentai gratis en español,

ver hentai Naruto,

ver hentai Dragon Ball,

hentai xxx anime,

hentai para celular,

hentai en HD,
z
hentai actualizado 2025,
Jardin del h

">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>       

<img class='ElJardinDelH' src="https://elnuevonuevojardin.netlify.app/jardin_procesado.jpg" alt="El Jardin Del H" />

<div class='titulos'>
  <div class='imagen-titulos'>





<form class='yus-paypal' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="GSCXDFQL732MS" />
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://elnuevonuevojardin.netlify.app/disney333.png" border="0" name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Comprar ahora" style="height: 100%; display: block; border: none; margin: 0; padding: 0;" />
</form>


    
    <h1 class='titulo3'>PACK COMPLETO DE DISNEY!!!</h1>
    <h2 class='titulo33'>HACE CLICK PARA DESCARGAR EL PACK COMPLETO!!</h2>
  </div>
</div>




<h1 class='parrafo'>Las putas putas De Disney Porno Rule 34 NSFW</h1>

{generarFotos()}
 

       <style>.post-body {{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
}}

.titulos {{
  height: 42vh;
  justify-content: space-between;
}}

.titulo3 {{
  position: absolute;
  z-index: 25;
}}

.titulo33 {{
  position: absolute;
  top: 30%;
  z-index: 25;
}}

.imagen-titulos {{
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  font-size: 52%;
}}

.yus-paypal {{
  z-index: 22;
  position: relative;
  right: 23%;
  height: 100%;
}}

.tandas {{
  display: flex;
  width: 100vw;
  max-width: 100vw;
  justify-content: space-between;
}}

.jardines {{
  display: flex;
  width: 100vw;
  max-width: 100vw;
}}

.tandas img {{
  width: 40%;
  object-fit: cover;
  display: block;
}}

.tandas video {{
  max-height: 80vh;
  max-width: 100%;
  height: auto;
  width: auto;
  display: block;
}}

.ElJardinDelH {{
  width: 100%;
  height: 500%;
  position: absolute;
  z-index: -1;
}}

html, body {{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}}


</style>
      


"""
    return html_contenido

def publicar_en_blogger(titulo, contenido_html, creds):
    """Publica una entrada en Blogger utilizando las credenciales OAuth."""
    service = build('blogger', 'v3', credentials=creds)
    post = {
        "kind": "blogger#post",
        "title": titulo,
        "content": contenido_html,
    }
    request = service.posts().insert(blogId=BLOG_ID, body=post)
    response = request.execute()
    print("Publicación realizada con éxito. URL:", response["url"])

creds = autenticar()
html_blogger = generar_html_para_blogger()
publicar_en_blogger('Las Putas putas de disney', html_blogger, creds)

  