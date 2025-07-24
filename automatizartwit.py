import shutil
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import os
import time
from PIL import Image, ImageDraw
import psutil
import random
import pyperclip



def conectar_a_brave_existente():
    chrome_options = Options()
    chrome_options.debugger_address = "127.0.0.1:9222"
    chrome_options.binary_location = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
    chrome_options.add_argument("--user-data-dir=C:\\Users\\sdaru\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data")
    chrome_options.add_argument("--profile-directory=Default")

    chromedriver_path = r"C:\Users\sdaru\OneDrive\Documentos\joakin\chromedriver-win64\chromedriver.exe"
    service = Service(executable_path=chromedriver_path)
    driver = webdriver.Chrome(service=service, options=chrome_options)
    return driver

driver = conectar_a_brave_existente()
link = 'https://eljardindelh.blogspot.com/2025/07/yamato-y-nami-doujin_45.html'
telegram = "https://t.me/elrincondelH"

# Lista de frases base con {link} que vamos a formatear
frases_base = [
    "🔥 Quien pudiera tener una milf asi como la guarra de Bulma,pidiendo polla de Gohan, esto por si no sabian es lo que dibujo Akira Toriyama antes de morir, queria darle un buen final feliz a Dragon Ball Z, para ver la delicia completa: ➡️ {link} | Tambien tenemos un telegram donde escuchamos todos los pedidos de la gente! 👉 {telegram}",
    "Que pensara el pobre Vegeta sabiendo que a su mujer se la estan follando de esta manera, pero bulma parece que lo disfruta.. Este doujin de hentai una delicia, todo en el jardin de las delicias, en el jardin del h: ➡️ {link} | Sumate a nuestro canal de telegram donde escuchamos todas las propuestas 👉 {telegram}",
    "🌸 One Piece Hentai como nunca viste. Yamato y Nami te esperan en este doujin sensual. Ver completo 👉 {link} | Telegram: {telegram}",
    "Para lo mas guarritos tenemos siempre la mejor guarrada, es un jardin todas las frutas son un pecado delicioso, leelo completo en:  {link} | Más waifus en nuestro canal 👉 {telegram}",
        "😳 La escena más caliente de Dragon Ball: Bulma arrastrando a Gohan al laboratorio para que la deje sin caminar... Este doujin es adictivo. Leelo entero 👉 {link} | Más perversiones en 👉 {telegram}",

"Subimos las mejores chanchadas de Dragon Ball todos los dias, sin giladas ni publicidades, para ver este doujin completo en : ➡️ {link}   | Pedi lo mejor en nuestro Telegram: {telegram},   "
      
]


import hashlib

# Función para obtener el hash de una frase
def obtener_hash_frase(frase):
    return hashlib.md5(frase.encode('utf-8')).hexdigest()

# Función para verificar si la frase ya fue publicada
def ya_fue_publicada(frase, archivo="tweets_publicados.txt"):
    hash_frase = obtener_hash_frase(frase)
    
    # Leer el archivo de tweets ya publicados
    if os.path.exists(archivo):
        with open(archivo, 'r') as file:
            publicadas = file.readlines()
        
        # Verificar si el hash de la frase ya está en el archivo
        for tweet_hash in publicadas:
            if tweet_hash.strip() == hash_frase:
                return True  # La frase ya fue publicada
    
    return False  # La frase no ha sido publicada

# Función para guardar el hash de la frase en el archivo
def guardar_frase_publicada(frase, archivo="tweets_publicados.txt"):
    hash_frase = obtener_hash_frase(frase)
    with open(archivo, 'a') as file:
        file.write(hash_frase + "\n")  # Guardar el hash de la frase



def twittear_doujin(driver, start_img=129, end_img=144):
    usadas = set()
    total = end_img - start_img + 1
    frases = frases_base.copy()
    
    for i in range(total):
        num_img = start_img + i
        if num_img == 144 :
            return
        
        # Seleccionamos una frase aleatoria
        frase_aleatoria = random.choice(frases)
        frase_final = frase_aleatoria.format(link=link, telegram=telegram)
        
        # Verificar si la frase ya fue publicada
        if ya_fue_publicada(frase_final):
            print("❌ Frase ya publicada. Eligiendo otra...")
            continue  # Si ya fue publicada, continuamos con la siguiente
        
        print(f"✅ Frase seleccionada: {frase_final}")
        
        # Guardamos la frase como publicada
        guardar_frase_publicada(frase_final)
        
        descripcion = frase_final
        
        # Navegar a la página principal de Twitter (o home)
        if driver.current_url != 'https://x.com/home':
            driver.get('https://x.com/home')
            time.sleep(6)  # Espera para que se cargue correctamente

        
        # Encontrar caja para twittear
        tweet_box = driver.find_element(By.CSS_SELECTOR, 'div[role="textbox"]')
        tweet_box.click()
        time.sleep(2)
        
        # Usar pyperclip para evitar problemas con emojis
        pyperclip.copy(descripcion)
        ActionChains(driver).click(tweet_box).key_down(Keys.CONTROL).send_keys('v').key_up(Keys.CONTROL).perform()
        
        # Subir imagen
        input_file = driver.find_element(By.CSS_SELECTOR, "input[type='file']")
        # Ruta relativa
        ruta_relativa = f'public/{num_img}.jpg'

        # Obtener ruta absoluta
        ruta_absoluta = os.path.abspath(ruta_relativa)

        # Ahora pasa la ruta absoluta a send_keys()
        input_file.send_keys(ruta_absoluta)
     
        
        time.sleep(3)  # Esperar que se cargue la imagen
        
        # Buscar el botón por el atributo 'data-testid' y hacer clic
        boton_postear = driver.find_element(By.CSS_SELECTOR, '[data-testid="tweetButtonInline"]')
        boton_postear.click()
        
        print(f"✅ Tweet con imagen {num_img}.jpg enviado.")
        
        # Esperar 15 minutos antes del siguiente tweet
        if i < total - 1:
            print("⏳ Esperando 15 minutos para el próximo tweet...")
            time.sleep(900)  # 900 segundos = 15 minutos


twittear_doujin(driver)