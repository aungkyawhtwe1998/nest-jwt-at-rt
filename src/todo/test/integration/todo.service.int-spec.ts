import { PrismaService } from 'src/prisma/prisma.service';
import { AppModule } from './../../../app.module';
import { Test } from "@nestjs/testing";

describe('TodoService Int', () => {
  beforeAll(async()=>{
    let prisma: PrismaService;
    const moduleRef = await Test.createTestingModule({
      imports:[AppModule]
    }).compile()

    prisma = moduleRef.get(PrismaService)
    // await prisma.cleanDatabase()
  });

  describe("createTodo", () => {
    it.todo('should create user')
    it.todo('should create todo')
  });

  describe("updateTodo", ()=>{

  })
  
  it.todo('should pass');
});
