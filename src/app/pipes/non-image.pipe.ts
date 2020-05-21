import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonImage'
})
export class NonImagePipe implements PipeTransform {
// la valeur c'est le tableau de l'Api de Spotify dans ce cas est images
// il n'y a pas d'autre argument   de type string
  transform(images: any[]): string {
// validation de l'image  
if(!images) {
  return 'assets/img/non-image.png';
}
if (images.length > 0) {
  return images[0].url;
} else {
  return 'assets/img/non-image.png';
}



    return null;
  }

}
