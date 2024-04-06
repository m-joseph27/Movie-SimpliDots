import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle',
  standalone: true
})
export class FormatTitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.replace(/_/g, ' ')
                .replace(/\b(\w)/g, char => char.toUpperCase())
                .replace(/(\s\w)/g, char => char.toUpperCase());
  }
}
