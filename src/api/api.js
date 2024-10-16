import axios from "axios";

const API = 'https://670ec6033e7151861655bacc.mockapi.io'

const getusers = () => axios.get(`${API}/auth`)
const getevents = () => axios.get(`${API}/events`)
const updateevent = (id, event) => axios.put(`${API}/events/${id}`, event)
export { getusers, getevents, updateevent }

// Auth Data
// [
//     {
//       "email": "tamil@gmail.com",
//       "password": "tamil",
//       "id": "1"
//     },
//     {
//       "email": "tamil1@gmail.com",
//       "password": "tamil1",
//       "id": "2"
//     }
//   ]

//Events Data
// [
//     {
//       "title": "Music Event 1",
//       "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam et ipsum est expedita quidem atque, eveniet nemo voluptatum cum nostrum distinctio totam sunt nulla, porro nam id? Quasi, commodi. Nihil iste mollitia, autem quam voluptatem ipsam tempora dolorem, odio, dolorum recusandae veniam illo nesciunt impedit quae eius. Quia, dolorum sed.",
//       "category": "Music",
//       "date": "10/10/24",
//       "seats": 12,
//       "price": 100,
//       "imageurl": "https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_1645/c_crop%2Cg_custom%2Fv1536327603%2Fpfcjmxutqi0ye0okhk22.jpg",
//       "id": "1"
//     },
//     {
//       "title": "Music Event 2",
//       "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam et ipsum est expedita quidem atque, eveniet nemo voluptatum cum nostrum distinctio totam sunt nulla, porro nam id? Quasi, commodi. Nihil iste mollitia, autem quam voluptatem ipsam tempora dolorem, odio, dolorum recusandae veniam illo nesciunt impedit quae eius. Quia, dolorum sed.",
//       "category": "Music",
//       "date": "14/10/24",
//       "seats": 0,
//       "price": 150,
//       "imageurl": "https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/07/How-to-organise-music-concert-768x549.jpg",
//       "id": "2"
//     },
//     {
//       "title": "Office Event 1",
//       "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam et ipsum est expedita quidem atque, eveniet nemo voluptatum cum nostrum distinctio totam sunt nulla, porro nam id? Quasi, commodi. Nihil iste mollitia, autem quam voluptatem ipsam tempora dolorem, odio, dolorum recusandae veniam illo nesciunt impedit quae eius. Quia, dolorum sed.",
//       "category": "Office",
//       "date": "08/12/24",
//       "seats": 17,
//       "price": 1500,
//       "imageurl": "https://snacknation.com/wp-content/uploads/2019/08/SnackNation-group.jpg",
//       "id": "3"
//     },
//     {
//       "title": "School Event ",
//       "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam et ipsum est expedita quidem atque, eveniet nemo voluptatum cum nostrum distinctio totam sunt nulla, porro nam id? Quasi, commodi. Nihil iste mollitia, autem quam voluptatem ipsam tempora dolorem, odio, dolorum recusandae veniam illo nesciunt impedit quae eius. Quia, dolorum sed.",
//       "category": "School",
//       "date": "08/12/24",
//       "seats": 48,
//       "price": 400,
//       "imageurl": "https://ticketing4schools.com/wp-content/uploads/2022/08/best-school-events.jpg",
//       "id": "4"
//     }
//   ]