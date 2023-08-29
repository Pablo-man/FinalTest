Requerimientos:
.- Node : v.18 en adelante
.- Editor de codigo por defecto: Visual Estudio
.- Crear archivo .env con las claves referentes al API de OpenAI => Formato de la variable de la llave de OpenAI: OPENAI_API_KEY


instalar dependencias de npm: npm install
Splitear el documento y almacenarlo de forma vectorial: ejecutar load.njs mediante "node load.js"
Ejecutar el modelo compress para la busqueda, en base al origen de datos vectorial: "node compressModel.js"