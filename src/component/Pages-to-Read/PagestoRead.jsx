
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const PagestoRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const data =[
        {
          "bookId": 1,
          "bookName": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "image": "https://i.ibb.co/9ZSJcGD/kindpng-1064993.png",
          "review": "The Great Gatsby is a timeless classic that delves into the complexities of the American Dream. Set in the prosperous Long Island of 1922, it follows the enigmatic millionaire Jay Gatsby and his pursuit of the elusive Daisy Buchanan. Through Gatsby's lavish parties and romantic gestures, Fitzgerald paints a vivid portrait of the Jazz Age, exploring themes of love, wealth, and the corruption that lies beneath the surface of the Roaring Twenties. With its lyrical prose and haunting symbolism, The Great Gatsby remains a poignant reflection on the fragility of dreams and the emptiness of the pursuit of happiness.",
          "totalPages": 180,
          "rating": 4.5,
          "category": "Fiction",
          "tags": ["Classic", "Romance", "Tragedy"],
          "publisher": "Charles Scribner's Sons",
          "yearOfPublishing": 1925,
          "location": "London, Katmondu, SL"
        },
        {
          "bookId": 2,
          "bookName": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "image": "https://i.ibb.co/jzpMFkx/kindpng-4945926-1.png",
          "review": "To Kill a Mockingbird is a powerful portrayal of racial injustice and moral growth. Set in the fictional town of Maycomb, Alabama, during the Great Depression, it follows the young Scout Finch and her brother Jem as they navigate the complexities of race and class in the Deep South. Through the trial of Tom Robinson, a black man falsely accused of raping a white woman, Harper Lee explores themes of empathy, compassion, and the loss of innocence. With its timeless message of tolerance and understanding, To Kill a Mockingbird continues to resonate with readers of all ages.",
          "totalPages": 324,
          "rating": 4.8,
          "category": "Food",
          "tags": ["Classic", "Legal Drama", "Coming-of-Age"],
          "publisher": "J. B. Lippincott & Co.",
          "yearOfPublishing": 1960,
          "location": "London, England, UK"
        },
        {
          "bookId": 3,
          "bookName": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "image": "https://i.ibb.co/WtJfTJK/kindpng-5624060-1.png",
          "review": "The Catcher in the Rye is a poignant exploration of teenage angst and disillusionment. Narrated by the cynical and alienated Holden Caulfield, it follows his journey through New York City after being expelled from prep school. As Holden grapples with feelings of isolation and alienation, J.D. Salinger captures the essence of adolescence with honesty and empathy. Through its raw and unfiltered narrative, The Catcher in the Rye continues to resonate with readers as a timeless coming-of-age story.",
          "totalPages": 224,
          "rating": 4.3,
          "category": "Bangla",
          "tags": ["Classic", "Coming-of-Age"],
          "publisher": "Little, Brown and Company",
          "yearOfPublishing": 1951,
          "location": "London, Reade, Pakistan"
        },
        {
          "bookId": 4,
          "bookName": "1984",
          "author": "George Orwell",
          "image": "https://i.ibb.co/JcjnJyn/kindpng-2193744-1.png",
          "review": "1984 is a chilling depiction of a dystopian society where truth is manipulated and individual freedom is suppressed. Set in a totalitarian regime ruled by the omnipresent Big Brother, it follows Winston Smith, a low-ranking member of the ruling Party, as he rebels against the oppressive regime. Through its exploration of surveillance, propaganda, and thought control, George Orwell warns of the dangers of authoritarianism and the erosion of democracy. With its powerful message and relevance to contemporary society, 1984 remains a seminal work of literature.",
          "totalPages": 328,
          "rating": 4.6,
          "category": "Fiction",
          "tags": ["Dystopian", "Political", "Social Commentary"],
          "publisher": "Secker & Warburg",
          "yearOfPublishing": 1949,
          "location": "London, Dilli, India"
        },
        {
          "bookId": 5,
          "bookName": "Pride and Prejudice",
          "author": "Jane Austen",
          "image": "https://i.ibb.co/Srtz02R/kindpng-81724-1.png",
          "review": "Pride and Prejudice is a delightful comedy of manners with timeless themes of love and social status. Set in early 19th-century England, it follows the spirited Elizabeth Bennet as she navigates the challenges of courtship and marriage in a society governed by strict social conventions. Through its witty dialogue and memorable characters, Jane Austen explores themes of prejudice, class, and the pursuit of happiness. With its enduring charm and universal appeal, Pride and Prejudice continues to captivate readers of all generations.",
          "totalPages": 432,
          "rating": 4.7,
          "category": "Travel",
          "tags": ["Classic", "Romance", "Satire"],
          "publisher": "T. Egerton, Whitehall",
          "yearOfPublishing": 1813,
          "location": "London, dhaka, BD"
        },
        {
          "bookId": 6,
          "bookName": "The Hobbit",
          "author": "J.R.R. Tolkien",
          "image": "https://i.ibb.co/rG35HhS/kindpng-4022054-1.png",
          "review": "The Hobbit is an enchanting adventure through Middle-earth, filled with courage and camaraderie. Bilbo Baggins, a hobbit of the Shire, is swept into an epic quest by the wizard Gandalf and a band of dwarves to reclaim their homeland from the dragon Smaug. Along the way, they encounter trolls, goblins, and other dangers, testing their resolve and friendship. With its rich world-building and timeless themes of heroism and friendship, The Hobbit remains a beloved classic of fantasy literature.",
          "totalPages": 310,
          "rating": 4.9,
          "category": "Fantasy",
          "tags": ["Adventure", "Epic", "Middle-earth"],
          "publisher": "Allen & Unwin",
          "yearOfPublishing": 1937,
          "location": "London, England, UK"
        }
      ]
    ;

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className=' py-10 pr-10 rounded-xl mt-10 bg-[#f1eeee]'>
            <ResponsiveContainer width="100%" height={500}>
            <BarChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
};
PagestoRead.propTypes = {
    props: PropTypes.object
  };
  

export default PagestoRead;
