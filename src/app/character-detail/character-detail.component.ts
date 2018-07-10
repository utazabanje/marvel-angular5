import { Component, OnInit } from '@angular/core';
import { Character, Image, CharacterDataWrapper } from '../character-class';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  // characterData: Character[];
  singleCharacter: Character;
  characterForm: FormGroup;
  // showEdit = true;
  // editMode = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // this.createForm(null);  zasto null
  }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get<CharacterDataWrapper>(`v1/public/characters/${id}`).subscribe(data => {
      this.singleCharacter = data.data.results[0]; // treba nam samo jedan karakter i zato stavimo [0] da bi uzeli prvi u nizu
      console.log(this.singleCharacter);

      // this.createForm(this.singleCharacter);
      // console.log(this.singleCharacter, 'aaaaaaaa');
    });
  }

  // createForm(character: Character) {
  //   console.log(character); // ovde je undefined
  //   this.characterForm = this.fb.group({
  //     id: character ? character.id : '',
  //     name: [character ? character.name : '', Validators.required],
  //     description: character ? character.description : '',
  //     thumbnail: [character ? character.thumbnail : '', Validators.required]
  //   });
  // }

  // editCharacter() {
  //   this.editMode = !this.editMode;
  // }

  // saveCharacter() {
  //   if (this.characterForm.valid === false) {
  //     return;
  //   }

  //   this.http.put<CharacterDataWrapper>('v1/public/characters', this.characterForm.value).subscribe(data => {
  //     this.router.navigateByUrl('v1/public/characters');
  //   });
  // }
}
