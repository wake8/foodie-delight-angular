import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Restaurent } from '../models/restaurent.model';
import { OperationsService } from './operations.service';

describe('OperationsService', () => {
  let service: OperationsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OperationsService]
    });
    service = TestBed.inject(OperationsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch restaurants list', () => {
    const mockRestaurants: Restaurent[] = [
      { id: 1, name: 'Restaurant A', description: 'sampledes', location: 'KRP', type: 'non-veg' },
      { id: 2, name: 'Restaurant B', description: 'sampledes', location: 'KKL', type: 'non-veg' }
    ];

    service.getRestaurantsList();
    const req = httpTestingController.expectOne('assets/mocks/restaurants.json');
    expect(req.request.method).toEqual('GET');
    req.flush(mockRestaurants);

    expect(service.list.getValue().length).toBe(2);
    expect(service.list.getValue()).toEqual(mockRestaurants);
  });

  it('should update listing with new data', () => {
    const mockRestaurants: Restaurent[] = [
      { id: 1, name: 'Restaurant A', description: 'sampledes', location: 'KRP', type: 'non-veg' },
      { id: 2, name: 'Restaurant B', description: 'sampledes', location: 'KKL', type: 'non-veg' }
    ];

    service.updateListing(mockRestaurants);
    expect(service.list.getValue().length).toBe(2);
    expect(service.list.getValue()).toEqual(mockRestaurants);
  });

  it('should update restaurant info', () => {
    const updatedRestaurant: Restaurent = { id: 1, name: 'Updated Restaurant', description: 'Updated Description', location: 'Updated Location', type: 'non-veg' };

    service.updateInfo(updatedRestaurant);
    const updatedList = service.list.getValue();
    const foundItem = updatedList.find(item => item.id === updatedRestaurant.id);
    expect(foundItem).toBeTruthy();
    expect(foundItem?.name).toEqual('Updated Restaurant');
  });

  it('should delete restaurant item', () => {
    const restaurantToDelete: Restaurent = { id: 1, name: 'Restaurant A', description: 'sampledes', location: 'KRP', type: 'non-veg' };

    service.deleteItem(restaurantToDelete);
    const updatedList = service.list.getValue();
    const foundItem = updatedList.find(item => item.id === restaurantToDelete.id);
    expect(foundItem).toBeFalsy();
  });


});