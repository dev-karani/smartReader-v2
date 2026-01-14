import { Module } from '@nestjs/common';
import { TtsBackendController } from './tts-backend.controller';

@Module({
  controllers: [TtsBackendController]
})
export class TtsBackendModule {}
