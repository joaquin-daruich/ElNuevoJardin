import subprocess
import os
import imageio_ffmpeg as ffmpeg

def convertir_video(input_path, output_path=None):
    if not os.path.exists(input_path):
        print(f"❌ Archivo no encontrado: {input_path}")
        return

    if output_path is None:
        nombre, ext = os.path.splitext(input_path)
        output_path = f"{nombre}_convertido.mp4"

    ffmpeg_path = ffmpeg.get_ffmpeg_exe()

    comando = [
        ffmpeg_path,
        "-i", input_path,
        "-c:v", "libx264",
        "-c:a", "aac",
        "-b:a", "192k",
        "-movflags", "+faststart",
        "-y",
        output_path
    ]

    try:
        print(f"🎬 Convirtiendo: {input_path} → {output_path}")
        subprocess.run(comando, check=True)
        print("✅ Conversión completada.")
    except subprocess.CalledProcessError:
        print("❌ Error durante la conversión.")

# Ejemplo de uso
convertir_video("yus53.mp4")