import express from 'express';
const router = express.Router();
import User from './schema.js'

// router.post(
//     "/upload"
//   );
// Create a new user
router.post('/submit', async (req, res) => {
    try {
      const formData = req.body;
      const newUser = new User({
        name: formData.name,
        email: formData.email
      });
      const savedUser = await newUser.save();
      res.send('Form submitted successfully!');
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  });

  export default router;