import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';




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
  tarih1: any;
  liste = [''];
  duzenlenecekListe = [''];

  public result() { // Hesaplama kodu
    
    let valueUretim = (document.getElementById("valueUretim") as HTMLInputElement).value;
    let valuePlanlanan = (document.getElementById("valuePlanlanan") as HTMLInputElement).value;
    
    let sonuc = (parseFloat(valueUretim) / parseFloat(valuePlanlanan) * 100);

    if (sonuc) {
      document.getElementById("result")!.innerHTML = 'Verim: %' + sonuc;
    } else {
      document.getElementById("result")!.innerHTML = 'Verimlilik hesabı için lütfen gerekli alanları doldurunuz.';
    }
    
    
    this.duzenlenecekListe = this.date.value.toString().split(' ');
    this.duzenlenecekListe.splice(0, 1);
    this.duzenlenecekListe.splice(3, 3);
    let ingilizceAy = this.duzenlenecekListe[0];
    let turkceAy = this.aylar[ingilizceAy];
    this.duzenlenecekListe.splice(0, 1);
    this.duzenlenecekListe.unshift(turkceAy);
    let tarih = this.duzenlenecekListe.join('-')

    console.log(tarih);

    
    
    

    if (sonuc) {
      this.liste.push('Verim: %' + sonuc.toString() + ' ' + 'Tarih: ' + tarih);
      document.getElementById("listeIsim")!.innerHTML = 'Hesap Listesi';
      document.getElementById("liste")!.innerHTML =   this.liste.join('</br>') ;
    }
    
  }

  
  
  
}