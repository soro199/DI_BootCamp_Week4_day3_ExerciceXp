import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getMessage(): string {
    return 'Hello Exercice4 Xp de week4 de day3 est  terminé ';
  }
}
