// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const User = require('./model/User');
// require('./model/Department');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors());

// const MONGO_URI = process.env.MONGO_URI;
// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
    
//     });

//     mongoose.connection.on('connected', () => {
//         console.log('MongoDB connected');
//     });


//    app.get('/api/users', async (req, res) => {
//     try{
//         const token = req.headers.authorization.split(' ')[1];

//         if(!token){
//              return res.status(401).json({message: 'Auth Error'});         
//     }
    
//     jwt.verify(token, 'your-secret-key', async (err, decoded) => {
//         if(err){
//             return res.status(401).json({message: 'Auth Error'});
//         }
//         const users = await User.findById(decoded.user.Id).populate('department_id').populate('doctor_id');
        

//         if(!users){
//             return res.status(404).json({message: 'User not found'});
//         }


// const formattedUser={
//     _id: users._id,
//     email: users.email,
//     forename: users.forename,
//     surname: users.surname,
//     guardian: users.guardian,
//     guardian_name: users.guardian_name,
//     dob: users.dob,
//     patient_number: users.patient_number,
//     appointment_date: users.appointment_date,
//     appointment_notes: users.appointment_notes,
//     notes: users.notes,
//     photo: users.photo,

//     department_id: users.department_id ? {
//         name: users.department_id.name,
//         details: users.department_id.details,
//         doctor_id: users.department_id.doctor_id,
//         doctor_img: users.department_id.doctor_img,
//         nurse: users.department_id.nurse,
//         nurse_img: users.department_id.nurse_img,
//         map: users.department_id.map,
//         phone: users.department_id.phone,
//     } : null,

//     doctor_id: users.doctor_id ? {
//         name: users.doctor_id.name,
//         speciality: users.doctor_id.speciality,
//         department_id: users.doctor_id.department_id,
//         contact: users.doctor_id.contact,
//     } : null,

// };

// res.json(formattedUser);
//     });

// }catch(err){
//     console.error(error);
//     res.status(500).json({message: 'Internal Server Error'});
// }
// });

// app.post('/api/login', async (req, res) => {
//     try{
//         const {patient_number, password} = req.body;
//         const user = await User.findOne({patient_number});

//         if(!user){
//             return res.status(400).json({message: 'Invalid Credentials'});
//         }

//         const passwordMatch = await bcrypt.compare(password, user.password);

//         if(!passwordMatch){
//             return res.status(401).json({message: 'Invalid Credentials'});
//         }

//         const tokenPayload = {
//             userId: user._id,
//     };

//     const token = jwt.sign(tokenPayload, 'your-secret-key', {expiresIn: '1h'});

//     res.json({token});
// }catch(error){
//     console.error(error);
//     res.status(500).json({error: 'Internal Server Error'});
// }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const User = require('./model/User');
// require('./model/Department');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cors());

// const MONGO_URI = process.env.MONGO_URI;
// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', () => {
//     console.log('MongoDB connected');
// });

// app.get('/api/users', async (req, res) => {
//     try {
//         const token = req.headers.authorization.split(' ')[1];

//         if (!token) {
//             return res.status(401).json({ message: 'Auth Error' });
//         }

//         jwt.verify(token, 'your-secret-key', async (err, decoded) => {
//             if (err) {
//                 return res.status(401).json({ message: 'Auth Error' });
//             }
//             const users = await User.findById(decoded.user.Id).populate('department_id').populate('doctor_id');

//             if (!users) {
//                 return res.status(404).json({ message: 'User not found' });
//             }

//             const formattedUser = {
//                 _id: users._id,
//                 email: users.email,
//                 forename: users.forename,
//                 surname: users.surname,
//                 guardian: users.guardian,
//                 guardian_name: users.guardian_name,
//                 dob: users.dob,
//                 patient_number: users.patient_number,
//                 appointment_date: users.appointment_date,
//                 appointment_notes: users.appointment_notes,
//                 notes: users.notes,
//                 photo: users.photo,

//                 department_id: users.department_id ? {
//                     name: users.department_id.name,
//                     details: users.department_id.details,
//                     doctor_id: users.department_id.doctor_id,
//                     doctor_img: users.department_id.doctor_img,
//                     nurse: users.department_id.nurse,
//                     nurse_img: users.department_id.nurse_img,
//                     map: users.department_id.map,
//                     phone: users.department_id.phone,
//                 } : null,

//                 doctor_id: users.doctor_id ? {
//                     name: users.doctor_id.name,
//                     speciality: users.doctor_id.speciality,
//                     department_id: users.doctor_id.department_id,
//                     contact: users.doctor_id.contact,
//                 } : null,
//             };

//             res.json(formattedUser);
//         });

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });

// app.post('/api/login', async (req, res) => {
//     try {
//         const { patient_number, password } = req.body;
//         const user = await User.findOne({ patient_number });

//         if (!user) {
//             return res.status(400).json({ message: 'Invalid Credentials' });
//         }

//         const passwordMatch = await bcrypt.compare(password, user.password);

//         if (!passwordMatch) {
//             return res.status(401).json({ message: 'Invalid Credentials' });
//         }

//         const tokenPayload = {
//             userId: user._id,
//         };

//         const token = jwt.sign(tokenPayload, 'your-secret-key', { expiresIn: '1h' });

//         res.json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./model/User');
require('./model/Department');
require('./model/Doctor');




const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


app.get('/api/users', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
      const user = await User.findById(decoded.userId).populate('department_id');

      // The decoded.userId should match the structure used in jwt.sign during login

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Return data only for the authenticated user
    // Inside the /api/users route
const formattedUser = {
  _id: user._id,
  email: user.email,
  forename: user.forename,
  surname: user.surname,
  guardian: user.guardian, // Add this line
  guardian_name: user.guardian_name,
  notes: user.notes, 
  dob: user.dob,
  patient_number: user.patient_number,
  appointment_date: user.appointment_date,
  appointment_notes: user.appointment_notes,
  department_id: user.department_id ? {
    name: user.department_id.name,
    details: user.department_id.details,
    consultant: user.department_id.consultant,
    nurse: user.department_id.nurse,
    consultant_img: user.department_id.consultant_img,
    nurse_img: user.department_id.nurse_img,
    img_one: user.department_id.img_one,
    img_two: user.department_id.img_two,
    img_three: user.department_id.img_three,
    map: user.department_id.map,
    // Add other department fields as needed
  } : null,
  
  
  // Add any additional fields you want to include
};

res.json(formattedUser);

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// patient login
app.post('/api/login', async (req, res) => {
  try {
    const { patient_number, password } = req.body;
    const user = await User.findOne({ patient_number });

    if (!user) {
      return res.status(401).json({ error: 'Invalid patient number or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid patient number or password' });
    }

    // Include is_admin in the token payload
    const tokenPayload = {
      userId: user._id,
    };

    const token = jwt.sign(tokenPayload, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
