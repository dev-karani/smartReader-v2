import { Module } from '@nestjs/common';
import { TtsBackendController } from './tts-backend.controller';
import { TtsBackendService } from './tts-backend.service';

@Module({
  controllers: [TtsBackendController],
  providers: [TtsBackendService]
})
export class TtsBackendModule {}
