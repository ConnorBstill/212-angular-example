import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleCase' })
export class TitleCase implements PipeTransform {
  transform(value: string): string {
    let words = value.split(' ')

    words = words.map(word => {
      return word[0].toUpperCase() + word.slice(1);
    });

    return words.join(' ');
  }
}