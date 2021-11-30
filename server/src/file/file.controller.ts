import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from './file-upload.utils';
import { diskStorage } from 'multer';



@Controller('file')
export class FileController {
    @Post()
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
    )
    async uploadedFile(@UploadedFile() file) {
      const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return response;
    }
  
    // @Post('multiple')
    // @UseInterceptors(
    //   FilesInterceptor('image', 20, {
    //     storage: diskStorage({
    //       destination: './files',
    //       filename: editFileName,
    //     }),
    //     fileFilter: imageFileFilter,
    //   }),
    // )
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

