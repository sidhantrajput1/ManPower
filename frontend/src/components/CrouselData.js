const carouselData = [
  {
    id: 1,
    name : 'Jone Doe',
    title: 'Connect with Top Recruiters',
    description: 'Expand your network and explore amazing opportunities in the tech world.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDc2MDR8MHwxfGFsbHwxfHx8fHx8fHwxNjY2NzcyMjMz&ixlib=rb-1.2.1&q=80&w=1080',
    altText: 'Recruiters meeting with engineers'
  },
  {
    id: 2,
    name : 'Jone Doe',
    title: 'Software Engineering Excellence',
    description: 'Master the craft of software engineering and take your skills to the next level.',
    imageUrl: 'https://images.unsplash.com/photo-1738694114013-4a92b1851d3b?ixid=M3w1NDk3NTJ8MHwxfGFsbHwxfHx8fHx8fHwxNzM4Nzg1NzAxfA&ixlib=rb-4.0.https://images.unsplash.com/photo-1740098594279-8f54148fa43d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'A software engineer working on code'
  },
  {
    id: 3,
    name : 'Jone Doe',
    title: 'Team Collaboration',
    description: 'Work collaboratively with developers to bring innovative projects to life.',
    imageUrl: 'https://images.unsplash.com/photo-1740098594279-8f54148fa43d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Engineers collaborating on a tech project'
  },
  {
    id: 4,
    name : 'Jone Doe',
    title: 'Innovate with Tech',
    description: 'Explore cutting-edge technology and be a part of the future of innovation.',
    imageUrl: 'https://images.unsplash.com/photo-1740098594279-8f54148fa43d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Tech innovation with digital solutions'
  },
  {
    id: 5,
    name : 'Jone Doe',
    title: 'Backend Engineering',
    description: 'Create scalable and efficient backend solutions for modern applications.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDc2MDR8MHwxfGFsbHw4fHx8fHx8fHwxNjY2NzcyMzMy&ixlib=rb-1.2.1&q=80&w=108https://images.unsplash.com/photo-1740098594279-8f54148fa43d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Backend systems in action'
  },
  {
    id: 6,
    name : 'Jone Doe',
    title: 'Step into DevOps',
    description: 'Learn to manage infrastructure and automate workflows in development operations.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDc2MDR8MHwxfGFsbHwxfHx8fHx8fHwxNjY2NzcyMjMz&ixlib=rb-1.2.1&q=80&w=108https://images.unsplash.com/photo-1740098594279-8f54148fa43d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'DevOps tools and workflows'
  },
  {
    id: 7,
    name : 'Jone Doe',
    title: 'Frontend Development Journey',
    description: 'Design intuitive user interfaces that enhance user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1740098594279-8f54148fa43d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Frontend design with engineers'
  },
  {
    id: 8,
    name : 'Jone Doe',
    title: 'Security Engineering',
    description: 'Protect systems and applications by implementing robust security measures.',
    imageUrl: 'https://images.unsplash.com/photo-1740098594279-8f54148fa43d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Security engineers working to safeguard systems'
  },
  {
    id: 9,
    name : 'Jone Doe',
    title: 'Data Science Insights',
    description: 'Unlock the power of data and gain valuable insights for decision-making.',
    imageUrl: 'https://images.unsplash.com/photo-1740098594279-8f54148fa43d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Data scientist analyzing data'
  },
  {
    id: 10,
    name : 'Jone Doe',
    title: 'AI & Machine Learning',
    description: 'Be a part of the AI revolution and develop intelligent systems that learn.',
    imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDc2MDR8MHwxfGFsbHwxMHx8fHx8fHwxNjY2NzcyMzMy&ixlib=rb-1.2.1&q=80&w=1080',
    altText: 'AI and ML engineers creating solutions'
  }
];

export default carouselData;
