export const DataImage: TImage[] = [
  {
    imageURL:
      'https://i.picsum.photos/id/1018/1000/600.jpg?hmac=8y6PgnvgTLEEW-118lVn6V6zPUVSN9JSi27GSpmGpdQ',
    description: {
      title: 'Title Something',
      content:
        'Beef chicken pork bacon chuck shortloin sirloin shank nostrud frankfurter, salami exercitation do ea aute dolore swine qui, nulla nisi hamburger non duis turducken filetmignon porchetta. Et culpa shortloin magna sausage ad shankle eiusmod stripsteak cow do ut commodo bresaola dolore consectetur, porkbelly enim officia labore porkchop porkloin proident frankfurter pariatur landjaeger meatloaf occaecat pork. '
    }
  },
  {
    imageURL:
      'https://i.picsum.photos/id/1019/1000/600.jpg?hmac=RLObZGa5jJSQPlH-G_fCwArdojutIz3sRU2w0XwV4Fk',
    description: {
      title: 'Title Something',
      content:
        'Beef chicken pork bacon chuck shortloin sirloin shank nostrud frankfurter, salami exercitation do ea aute dolore swine qui, nulla nisi hamburger non duis turducken filetmignon porchetta. Et culpa shortloin magna sausage ad shankle eiusmod stripsteak cow do ut commodo bresaola dolore consectetur, porkbelly enim officia labore porkchop porkloin. '
    }
  },
  {
    imageURL:
      'https://i.picsum.photos/id/1015/1000/600.jpg?hmac=83r7MYXuB_x4-Z65prrX29wUe76fLOtytf_NwI3lPm4',
    description: {
      title: 'Title Something',
      content:
        'Beef chicken pork bacon chuck shortloin sirloin shank nostrud frankfurter, salami exercitation do ea aute dolore swine qui, nulla nisi hamburger non duis turducken filetmignon porchetta. Et culpa shortloin magna sausage ad shankle eiusmod stripsteak cow do ut commodo bresaola dolore consectetur, porkbelly enim officia labore porkchop porkloin. '
    }
  }
]

export type TImage = {
  imageURL: string
  description: {
    title: string
    content: string
  }
}
