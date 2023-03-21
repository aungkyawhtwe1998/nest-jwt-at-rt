import { PrismaService } from './../prisma/prisma.service';
import { Controller } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    constructor(private prisma: PrismaService){}

    createTo(){

    }

    updateTodo(){
        
    }
}
