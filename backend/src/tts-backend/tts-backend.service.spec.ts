import { Test, TestingModule } from '@nestjs/testing';
import { TtsBackendService } from './tts-backend.service';

describe('TtsBackendService', () => {
  let service: TtsBackendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TtsBackendService],
    }).compile();

    service = module.get<TtsBackendService>(TtsBackendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
