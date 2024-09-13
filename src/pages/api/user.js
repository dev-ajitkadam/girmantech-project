let usersData = [
    {
      "name": "Ajay Sharma",
      "location": "Mumbai, India",
      "contact_number": "9876543210",
      "profile_image": "https://example.com/profile1.jpg"
    },
    {
      "name": "Ritu Patel",
      "location": "Ahmedabad, India",
      "contact_number": "9876543211",
      "profile_image": "https://example.com/profile2.jpg"
    },
    {
      "name": "Suresh Mehta",
      "location": "Delhi, India",
      "contact_number": "9876543212",
      "profile_image": "https://example.com/profile3.jpg"
    },
    {
      "name": "Anita Roy",
      "location": "Kolkata, India",
      "contact_number": "9876543213",
      "profile_image": "https://example.com/profile4.jpg"
    },
    {
      "name": "Rahul Verma",
      "location": "Bangalore, India",
      "contact_number": "9876543214",
      "profile_image": "https://example.com/profile5.jpg"
    },
    {
      "name": "Priya Singh",
      "location": "Chennai, India",
      "contact_number": "9876543215",
      "profile_image": "https://example.com/profile6.jpg"
    },
    {
      "name": "Kiran Gupta",
      "location": "Pune, India",
      "contact_number": "9876543216",
      "profile_image": "https://example.com/profile7.jpg"
    },
    {
      "name": "Manoj Desai",
      "location": "Hyderabad, India",
      "contact_number": "9876543217",
      "profile_image": "https://example.com/profile8.jpg"
    },
    {
      "name": "Nisha Kapoor",
      "location": "Jaipur, India",
      "contact_number": "9876543218",
      "profile_image": "https://example.com/profile9.jpg"
    },
    {
      "name": "Rohan Kumar",
      "location": "Lucknow, India",
      "contact_number": "9876543219",
      "profile_image": "https://example.com/profile10.jpg"
    },
    {
      "name": "Vikas Jain",
      "location": "Surat, India",
      "contact_number": "9876543220",
      "profile_image": "https://example.com/profile11.jpg"
    },
    {
      "name": "Sneha Iyer",
      "location": "Coimbatore, India",
      "contact_number": "9876543221",
      "profile_image": "https://example.com/profile12.jpg"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
    {
      "name": "Anjali Sharma",
      "location": "Mumbai",
      "contact_number": "9099980888",
      "profile_image": "https://unsplash.com/photos/woman-taking-photo-while-showing-smile-u3WmDyKGsrY"
    },
   
  ]
  

  export default function handler(req, res) {
    const { search } = req.query;
  
    if (!search) {
      return res.status(400).json({ message: 'Search query not provided' });
    }
  
    const filteredUsers = usersData.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase()) || user.location.toLowerCase().includes(search.toLowerCase())
    );
    
    if (filteredUsers.length > 0) {
      res.status(200).json(filteredUsers);
    }  else {
      res.status(404).json({ message: 'No users found' });
    }
  }