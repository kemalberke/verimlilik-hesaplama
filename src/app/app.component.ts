import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  aylar: any = {
    'Jan': "Ocak",
    'Feb': "Şubat",
    'Mar': "Mart",
    'Apr': "Nisan",
    'May': "Mayıs",
    'Jun': "Haziran",
    'Jul': "Temmuz",
    'Aug': "Ağustos",
    'Sep': "Eylül",
    'Oct': "Ekim",
    'Nov': "Kasım",
    'Dec': "Aralık"

  }

  title = 'verimlilik-hesabi';
  date = new FormControl(new Date());
  liste = [''];
  tarihDuzenleme = [''];
  uretimInput: string = '';
  planlananInput: string = '';

  public result() {

    let valueUretim = (document.getElementById("valueUretim") as HTMLInputElement).value;
    let valuePlanlanan = (document.getElementById("valuePlanlanan") as HTMLInputElement).value;

    let sonuc = (parseFloat(valueUretim) / parseFloat(valuePlanlanan) * 100);


    this.tarihDuzenleme = this.date.value.toString().split(' ');
    this.tarihDuzenleme.splice(0, 1);
    this.tarihDuzenleme.splice(3, 3);
    let ingilizceAy = this.tarihDuzenleme[0];
    let turkceAy = this.aylar[ingilizceAy];
    this.tarihDuzenleme.splice(0, 1);
    this.tarihDuzenleme.unshift(turkceAy);
    let tarih = this.tarihDuzenleme.join('-')

    if (sonuc) {
      document.getElementById("result")!.innerHTML = 'Verim: %' + sonuc.toFixed(2);
      this.liste.push('Verim: %' + sonuc.toFixed(2).toString() + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 'Tarih: ' + tarih);
      document.getElementById("listeIsim")!.innerHTML = 'Hesap Listesi:';
      document.getElementById("liste")!.innerHTML = this.liste.join('</br>');
      this.uretimInput = '';
      this.planlananInput = '';
    } else {
      document.getElementById("result")!.innerHTML = 'Verimlilik hesabı için lütfen gerekli alanları doldurunuz.';
    }
  }
}

