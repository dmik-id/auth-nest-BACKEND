import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';


@Controller('file')
export class FileController {

    @Post('multiple')
    @UseInterceptors(
      FilesInterceptor('image', 20, {
        storage: diskStorage({
          destination: './files',
          filename: 'test'
        }),
        
      }),
    )
    async uploadMultipleFiles(@UploadedFiles() files) {
      const response = [];
      files.forEach(file => {
        const fileReponse = {
          originalname: file.originalname,
          filename: file.filename,
        };
        response.push(fileReponse);
      });
      return response;
    }

}
function diskStorage(arg0: { destination: string; filename: any; }): any {
    throw new Error('Function not implemented.');
}

