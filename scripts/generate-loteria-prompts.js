const fs = require('fs');
const path = require('path');

// Configuration
const TEMPLATE_PATH = path.join(__dirname, '../prompt-imagenes.md');
const OUTPUT_DIR = path.join(__dirname, '../prompts/cartas');

// Card Data
const cards = [
    {
        slug: 'el-diablito',
        nombre: 'EL DIABLITO',
        descripcion: 'pequeño diablo rojo con cuernos y cola, expresión pícara, sosteniendo un tridente, postura juguetona, estilo folclórico tradicional'
    },
    {
        slug: 'el-catrin',
        nombre: 'EL CATRÍN',
        descripcion: 'hombre elegante con traje oscuro, sombrero de copa y bastón, postura orgullosa y refinada, estilo clásico mexicano'
    },
    {
        slug: 'el-paraguas',
        nombre: 'EL PARAGUAS',
        descripcion: 'paraguas abierto de tela oscura, mango curvo, ligeramente inclinado, escena simple sin fondo complejo'
    },
    {
        slug: 'la-sirena',
        nombre: 'LA SIRENA',
        descripcion: 'sirena de medio cuerpo, cabello largo ondulado, cola verde azulada, posando sobre una roca marina'
    },
    {
        slug: 'la-escalera',
        nombre: 'LA ESCALERA',
        descripcion: 'escalera de madera apoyada en diagonal, peldaños visibles, composición simple y centrada'
    },
    {
        slug: 'la-botella',
        nombre: 'LA BOTELLA',
        descripcion: 'botella de vidrio verde, estilo antiguo, con etiqueta simple, colocada de forma vertical'
    },
    {
        slug: 'el-barril',
        nombre: 'EL BARRIL',
        descripcion: 'barril de madera con aros metálicos, vista frontal, proporciones sólidas'
    },
    {
        slug: 'el-arbol',
        nombre: 'EL ÁRBOL',
        descripcion: 'árbol frondoso de copa redonda, tronco grueso, raíces visibles, estilo ilustración sencilla'
    },
    {
        slug: 'el-melon',
        nombre: 'EL MELÓN',
        descripcion: 'melón verde claro entero, con textura suave y líneas naturales, composición centrada'
    },
    {
        slug: 'el-valiente',
        nombre: 'EL VALIENTE',
        descripcion: 'hombre con bigote, sombrero ancho y machete en la mano, postura firme y desafiante'
    },
    {
        slug: 'el-gorrito',
        nombre: 'EL GORRITO',
        descripcion: 'gorro rojo sencillo con borla, forma cónica, ligeramente inclinado'
    },
    {
        slug: 'la-muerte',
        nombre: 'LA MUERTE',
        descripcion: 'esqueleto humano de cuerpo completo, postura erguida, expresión neutra, estilo tradicional'
    },
    {
        slug: 'la-pera',
        nombre: 'LA PERA',
        descripcion: 'pera verde madura, forma estilizada, con tallo corto'
    },
    {
        slug: 'la-bandera',
        nombre: 'LA BANDERA',
        descripcion: 'bandera mexicana ondeando suavemente, colores verde blanco y rojo bien definidos'
    },
    {
        slug: 'el-bandolon',
        nombre: 'EL BANDOLÓN',
        descripcion: 'bandolón mexicano grande, cuerpo de madera, cuerdas visibles, colocado en vertical'
    },
    {
        slug: 'el-violoncello',
        nombre: 'EL VIOLONCELLO',
        descripcion: 'violonchelo clásico, madera oscura, cuerdas y arco visibles'
    },
    {
        slug: 'la-garza',
        nombre: 'LA GARZA',
        descripcion: 'garza blanca de pie, cuello largo curvado, postura tranquila'
    },
    {
        slug: 'el-pajaro',
        nombre: 'EL PÁJARO',
        descripcion: 'ave pequeña de colores vivos, posada sobre una rama'
    },
    {
        slug: 'la-mano',
        nombre: 'LA MANO',
        descripcion: 'mano humana abierta, palma visible, dedos extendidos'
    },
    {
        slug: 'la-bota',
        nombre: 'LA BOTA',
        descripcion: 'bota de cuero café, estilo antiguo, vista lateral'
    },
    {
        slug: 'la-luna',
        nombre: 'LA LUNA',
        descripcion: 'luna creciente amarilla, con rostro humano sereno, estilo clásico'
    },
    {
        slug: 'el-cotorro',
        nombre: 'EL COTORRO',
        descripcion: 'loro verde con pico curvo, posado de perfil'
    },
    {
        slug: 'el-borracho',
        nombre: 'EL BORRACHO',
        descripcion: 'hombre con sombrero ladeado, botella en mano, postura relajada e inestable'
    },
    {
        slug: 'el-corazon',
        nombre: 'EL CORAZÓN',
        descripcion: 'corazón rojo anatómico estilizado, simple y centrado'
    },
    {
        slug: 'la-sandia',
        nombre: 'LA SANDÍA',
        descripcion: 'sandía roja partida mostrando semillas negras, forma triangular'
    },
    {
        slug: 'el-tambor',
        nombre: 'EL TAMBOR',
        descripcion: 'tambor de madera con parches tensados, baquetas cruzadas encima'
    },
    {
        slug: 'el-camaron',
        nombre: 'EL CAMARÓN',
        descripcion: 'camarón rosado curvado, detalles simples'
    },
    {
        slug: 'las-jaras',
        nombre: 'LAS JARAS',
        descripcion: 'flechas cruzadas con plumas, apuntando en direcciones opuestas'
    },
    {
        slug: 'el-musico',
        nombre: 'EL MÚSICO',
        descripcion: 'hombre tocando guitarra mexicana, sentado o de pie, expresión concentrada'
    },
    {
        slug: 'la-arana',
        nombre: 'LA ARAÑA',
        descripcion: 'araña negra de ocho patas, vista frontal, cuerpo simétrico'
    },
    {
        slug: 'el-soldado',
        nombre: 'EL SOLDADO',
        descripcion: 'soldado con uniforme antiguo, rifle al hombro, postura firme'
    },
    {
        slug: 'la-estrella',
        nombre: 'LA ESTRELLA',
        descripcion: 'estrella amarilla de cinco puntas, estilo simple y brillante'
    },
    {
        slug: 'el-cazo',
        nombre: 'EL CAZO',
        descripcion: 'cazo metálico con mango largo, estilo cocina tradicional'
    },
    {
        slug: 'el-mundo',
        nombre: 'EL MUNDO',
        descripcion: 'globo terráqueo antiguo, continentes visibles, colores suaves'
    },
    {
        slug: 'el-apache',
        nombre: 'EL APACHE',
        descripcion: 'hombre indígena con penacho de plumas, vestimenta tradicional, postura digna'
    },
    {
        slug: 'el-nopal',
        nombre: 'EL NOPAL',
        descripcion: 'nopal con varias pencas verdes y algunas tunas rojas'
    },
    {
        slug: 'el-alacran',
        nombre: 'EL ALACRÁN',
        descripcion: 'alacrán negro o café oscuro, cola arqueada'
    },
    {
        slug: 'la-rosa',
        nombre: 'LA ROSA',
        descripcion: 'rosa roja abierta con tallo y hojas verdes'
    },
    {
        slug: 'la-calavera',
        nombre: 'LA CALAVERA',
        descripcion: 'calavera humana blanca, vista frontal, estilo clásico'
    },
    {
        slug: 'la-campana',
        nombre: 'LA CAMPANA',
        descripcion: 'campana dorada colgante, badajo visible'
    },
    {
        slug: 'el-cantarito',
        nombre: 'EL CANTARITO',
        descripcion: 'cantarito de barro con asa, estilo tradicional mexicano'
    },
    {
        slug: 'el-venado',
        nombre: 'EL VENADO',
        descripcion: 'venado con cornamenta, postura elegante y tranquila'
    },
    {
        slug: 'el-sol',
        nombre: 'EL SOL',
        descripcion: 'sol amarillo con rostro humano sonriente, rayos triangulares'
    },
    {
        slug: 'la-corona',
        nombre: 'LA CORONA',
        descripcion: 'corona dorada con detalles simples y simétricos'
    },
    {
        slug: 'la-chalupa',
        nombre: 'LA CHALUPA',
        descripcion: 'chalupa de madera pequeña flotando en agua tranquila'
    },
    {
        slug: 'el-pino',
        nombre: 'EL PINO',
        descripcion: 'pino verde alto, forma triangular, ramas simétricas'
    },
    {
        slug: 'el-pescado',
        nombre: 'EL PESCADO',
        descripcion: 'pez azul plateado, vista lateral, aletas visibles'
    },
    {
        slug: 'la-palma',
        nombre: 'LA PALMA',
        descripcion: 'palmera tropical con tronco delgado y hojas abiertas'
    },
    {
        slug: 'la-maceta',
        nombre: 'LA MACETA',
        descripcion: 'maceta de barro con planta verde frondosa'
    },
    {
        slug: 'el-arpa',
        nombre: 'EL ARPA',
        descripcion: 'arpa clásica de madera con cuerdas curvas'
    },
    {
        slug: 'la-rana',
        nombre: 'LA RANA',
        descripcion: 'rana verde sentada, vista frontal'
    },
    {
        slug: 'el-gallo',
        nombre: 'EL GALLO',
        descripcion: 'gallo de pelea con plumaje colorido, cresta roja vibrante, pico abierto cantando, perfil derecho, postura erguida'
    },
    {
        slug: 'la-dama',
        nombre: 'LA DAMA',
        descripcion: 'mujer elegante de perfil, traje sastre turquesa o verde, sombrero coordinado, bolsa de mano, postura refinada'
    },
    {
        slug: 'el-negrito',
        nombre: 'EL NEGRITO',
        descripcion: 'hombre moreno con ropa tradicional campesina, sombrero y paliacate, postura alegre y sencilla, representación respetuosa y estilo clásico histórico'
    }
];

// Main Execution
const run = () => {
    try {
        // 1. Verify template exists
        if (!fs.existsSync(TEMPLATE_PATH)) {
            console.error(`Error: Template not found at ${TEMPLATE_PATH}`);
            process.exit(1);
        }

        // 2. Read template
        const templateContent = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

        // 3. Ensure output directory exists
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        // 4. Generate Files
        console.log(`Generating ${cards.length} prompts...`);

        cards.forEach(card => {
            // Replace placeholders
            let prompt = templateContent
                .replace('[NOMBRE DE LA CARTA]', card.nombre)
                .replace('[DESCRIPCIÓN DETALLADA DEL ÍCONO]', card.descripcion);

            const fileContent = `# ${card.nombre}\n\n${prompt}`;
            const filePath = path.join(OUTPUT_DIR, `${card.slug}.md`);

            fs.writeFileSync(filePath, fileContent);
        });

        console.log('Done.');

    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
};

run();
