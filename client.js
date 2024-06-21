import net from 'net';

// 서버에 연결할 호스트와 포트
const HOST = 'localhost';
const PORT = 5555;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log('Connected to server');

  const message = 'Hello'; 
  const buffer = Buffer.from(message);
  client.write(buffer); // write 메서드로 버퍼 쓰기
});

client.on('data', (data) => {
  console.log(data);
});

client.on('close', () => {
  console.log('Connection closed');
});

client.on('error', (err) => {
  console.error('Client error:', err);
});
