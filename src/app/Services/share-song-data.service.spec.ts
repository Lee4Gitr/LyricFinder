import { TestBed } from '@angular/core/testing';

import { ShareSongDataService } from './share-song-data.service';

describe('ShareSongDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareSongDataService = TestBed.get(ShareSongDataService);
    expect(service).toBeTruthy();
  });
});
