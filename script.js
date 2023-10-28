/*
    Assignment 05
    aditya bhoite
*/

$(document).ready(function () {
    // Create the ContentItem class
    class ContentItem {
        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }

        toString() {
            return `<div class="content-item-wrapper" id="content-item-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.categoryGenre}</div>
            </div>`;
        }
    }

    // Create an array of ContentItems with music-related information
    const contentItems = [
        new ContentItem(0, "Album: The Dark Side of the Moon", "The Dark Side of the Moon is the eighth studio album by the English rock band Pink Floyd. It was released on March 1, 1973. The album is known for its progressive rock and concept album style.", "Rock"),
        new ContentItem(1, "Artist: Michael Jackson", "Michael Jackson was an American singer, songwriter, and dancer. He is often referred to as the 'King of Pop.' His music career spanned several decades and included hits like 'Thriller' and 'Billie Jean.'", "Pop"),
        new ContentItem(2, "Genre: Jazz", "Jazz is a music genre that originated in the African-American communities of New Orleans, United States, in the late 19th and early 20th centuries. It is characterized by improvisation and syncopation.", "Jazz"),
        new ContentItem(3, "Band: The Beatles", "The Beatles were an English rock band formed in Liverpool in 1960. They became one of the most influential and successful bands in the history of popular music, with iconic songs like 'Hey Jude' and 'Let It Be.'", "Rock"),
        new ContentItem(4, "Song: Bohemian Rhapsody", "Bohemian Rhapsody is a song by the British rock band Queen. It was released in 1975 as a part of their album 'A Night at the Opera.' The song is known for its operatic and progressive rock elements.", "Rock"),
    ];

    // Append content items to the #content-item-list
    contentItems.forEach(item => {
        $('#content-item-list').append(item.toString());
    });
});
