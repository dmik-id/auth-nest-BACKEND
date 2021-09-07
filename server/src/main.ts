import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"
const cors = require('cors')


async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)
    app.use(cors({
        credentials: true,
        origin: process.env.CLIENT_URL
    }));

    const config = new DocumentBuilder()
        .setTitle('authorization')
        .setDescription('documentation')
        .setVersion('1.0.0')
        .build()

    const document  = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`HE ${PORT}`))
    
}

start()