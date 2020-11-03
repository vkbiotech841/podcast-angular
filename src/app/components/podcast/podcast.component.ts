import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchTextCollector();
  }

  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ];

  categories = [
    "Latest",
    "বাংলো",
    "हिंदी",
  ];

  podcasts = [
    {
      title: 'VIKRAM',
      image: 'assets/images/podcasts/1.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990,
      description: "",
      duration: "",
      language: "",
      type: "Non-Educational"
    },
    {
      title: 'KUMAR',
      image: 'assets/images/podcasts/2.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'ROBIN',
      image: 'assets/images/podcasts/3.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'PANDEY',
      image: 'assets/images/podcasts/4.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'ABHISHEK',
      image: 'assets/images/podcasts/5.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'DON',
      image: 'assets/images/podcasts/6.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'BLABLA',
      image: 'assets/images/podcasts/7.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'VIRKAM',
      image: 'assets/images/podcasts/8.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'VIRKAM',
      image: 'assets/images/podcasts/9.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'VIRKAM',
      image: 'assets/images/podcasts/10.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'VIRKAM',
      image: 'assets/images/podcasts/11.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'VIRKAM',
      image: 'assets/images/podcasts/12.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'VIRKAM',
      image: 'assets/images/podcasts/13.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'VIRKAM',
      image: 'assets/images/podcasts/14.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },
    {
      title: 'VIRKAM',
      image: 'assets/images/podcasts/15.png',
      audioFile: '',
      author: 'Vikram Kumar',
      releaseYear: 1990
    },

  ];


  displaySearchResult: any;

  filterText(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    };
    if (!searchText) {
      return items;
    };
    searchText = searchText.toLocaleLowerCase();
    console.log("searchtext2", searchText)

    this.displaySearchResult = items.filter(item => {
      return item.toLocaleLowerCase().includes(searchText);
    });
    console.log("displaySearchResult", this.displaySearchResult);
  };



  searchTerms: any[];
  searchByYear: any[];

  searchTextCollector() {
    this.searchTerms = this.podcasts.map(x => x.title)
    this.searchByYear = this.podcasts.map(x => x.releaseYear);
    console.log("searchTerm", this.searchTerms, this.searchByYear);
  };

}
