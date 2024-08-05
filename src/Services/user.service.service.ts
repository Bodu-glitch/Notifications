import { Injectable } from '@angular/core';
import { UserModel } from '../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  user1 = {
    name: 'John',
    age: 30,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    description: 'commented on your post  ',
    isNew: true,
    id: 1,
    timestamp: '4w',
  } as UserModel;

  user2 = {
    name: 'Jane',
    age: 25,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'liked your post',
    isNew: true,
    id: 2,
    timestamp: '4w',
  } as UserModel;

  user3 = {
    name: 'Joe',
    age: 35,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'sent you a friend request',
    isNew: true,
    id: 3,
    timestamp: '4w',
  } as UserModel;

  user4 = {
    name: 'Jill',
    age: 40,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'liked your post',
    isNew: true,
    id: 4,
    timestamp: '4w',
  } as UserModel;

  user5 = {
    name: 'Jack',
    age: 45,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    description: 'liked your post',
    isNew: true,
    id: 5,
    timestamp: '4w',
  } as UserModel;

  userlist:UserModel[] = [this.user1, this.user2, this.user3, this.user4, this.user5];
}
