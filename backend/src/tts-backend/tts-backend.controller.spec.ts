import { Test, TestingModule } from '@nestjs/testing';
import { TtsBackendController } from './tts-backend.controller';

describe('TtsBackendController', () => {
  let controller: TtsBackendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TtsBackendController],
    }).compile();

    controller = module.get<TtsBackendController>(TtsBackendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
