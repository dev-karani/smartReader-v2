import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TtsBackendModule } from './tts-backend/tts-backend.module';

@Module({
  imports: [TtsBackendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
