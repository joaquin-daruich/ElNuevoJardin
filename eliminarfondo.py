from rembg import remove
from PIL import Image
import io

def eliminar_fondo(input_image_path, output_image_path):
    # Abrir la imagen
    with open(input_image_path, 'rb') as input_file:
        input_image = input_file.read()

    # Eliminar el fondo usando rembg
    output_image = remove(input_image)

    # Guardar la imagen resultante
    with open(output_image_path, 'wb') as output_file:
        output_file.write(output_image)

    print(f"Imagen guardada sin fondo en: {output_image_path}")
nombre = 'disney33'
nueva22 = 'disney333'
# numero = 1

# while numero != 5 :

    # Ejemplo de uso
input_image = nombre  + '.png'  # Reemplaza con el path de tu imagen
output_image = nueva22 + '.png'  # 

eliminar_fondo(input_image, output_image)   
    # numero += 1
    
    