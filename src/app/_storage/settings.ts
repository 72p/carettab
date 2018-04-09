/*
 * ng2-chrome-storage
 * @author Hasan Hameed <hasan.hameed07@gmail.com>
 * Url: https://github.com/hasanhameed07/ng2-chrome-storage.git
 * 
 * Modified by BlueCaret (John Hancock) <john@jwh.design>
 */
export class Settings {
  storeKey = 'carettab';  // identifier to be used as a key for storage
  data = {
    design: {
      scalingMethod: true
    },
    bookmarks: {
      quickLinks: true,
      scaling: 50,
      links: [
        {
          label: 'Google',
          url: 'https://www.google.com/'
        },
        {
          label: 'Gmail',
          url: 'https://www.gmail.com/'
        },
        {
          label: 'YouTube',
          url: 'https://www.youtube.com/'
        }
      ]
    }
  };
}