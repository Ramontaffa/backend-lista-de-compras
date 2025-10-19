import prisma from './src/database/prismaClient';

async function testDatabaseConnection() {
  try {
    console.log('🔄 Testando conexão com o banco de dados...\n');
    
    // Tenta conectar ao banco
    await prisma.$connect();
    console.log('✅ Prisma conectado com sucesso!\n');
    
    // Testa uma query simples
    const result = await prisma.$queryRaw`SELECT NOW() as current_time`;
    console.log('Hora atual do servidor PostgreSQL:', result);
    
    // Verifica se a tabela User existe
    const userCount = await prisma.user.count();
    console.log(`\nTotal de usuários no banco: ${userCount}`);
    
    // Lista todos os usuários (se houver)
    if (userCount > 0) {
      const users = await prisma.user.findMany();
      console.log('\nUsuários encontrados:');
      users.forEach((user) => {
        console.log(` - ID: ${user.id}, Email: ${user.email}, Nome: ${user.name}`);
      });
    } else {
      console.log('\nNenhum usuário cadastrado ainda.');
    }
    
    console.log('\nTeste concluído com sucesso!');
    
  } catch (error) {
    console.error('\nErro ao conectar ao banco de dados:');
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('\n🔌 Conexão com o banco encerrada.');
  }
}

testDatabaseConnection();
