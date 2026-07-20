import mongoose from 'mongoose';
import { config } from './config/unifiedConfig';
import { Feedback } from './models/Feedback';
import dotenv from 'dotenv';
dotenv.config();

const sampleFeedbacks = [
  {
    title: 'Dark mode toggle is not persisting',
    description: 'When I switch to dark mode and refresh the page, it reverts back to light mode. This happens on both Chrome and Safari.',
    category: 'Bug',
    priority: 'Medium',
    votes: 42,
  },
  {
    title: 'Add social login options',
    description: 'It would be great to be able to log in using Google or GitHub accounts to speed up the registration process.',
    category: 'Feature',
    priority: 'High',
    votes: 128,
  },
  {
    title: 'Performance issues on the dashboard',
    description: 'The main dashboard takes more than 5 seconds to load when there are many items. We should implement pagination or infinite scrolling.',
    category: 'Improvement',
    priority: 'High',
    votes: 85,
  },
  {
    title: 'Typo in the settings menu',
    description: 'Under the Profile tab, the word "Notification" is misspelled as "Notifcation". Please fix this.',
    category: 'Bug',
    priority: 'Low',
    votes: 12,
  },
  {
    title: 'Export data to CSV',
    description: 'We need a way to export all our feedback data into a CSV format for offline analysis and reporting.',
    category: 'Feature',
    priority: 'Medium',
    votes: 56,
  },
  {
    title: 'Update the primary color to be more accessible',
    description: 'The current blue shade used for primary buttons does not meet WCAG contrast guidelines when placed on white backgrounds.',
    category: 'Improvement',
    priority: 'Medium',
    votes: 34,
  },
  {
    title: 'Mobile layout broken on small screens',
    description: 'On screens smaller than 375px wide, the navigation bar overlaps with the main content area making it unusable.',
    category: 'Bug',
    priority: 'High',
    votes: 93,
  },
  {
    title: 'Add email notifications for updates',
    description: 'Users should be notified via email when a feedback item they created or upvoted changes status.',
    category: 'Feature',
    priority: 'High',
    votes: 210,
  },
  {
    title: 'Make table headers sticky',
    description: 'When scrolling down a long list of items, it would be helpful if the table headers remained fixed at the top of the screen.',
    category: 'Improvement',
    priority: 'Low',
    votes: 18,
  },
  {
    title: 'Image upload failing for large files',
    description: 'Attempting to upload profile pictures larger than 5MB results in an unhandled error. We need better error messages or automatic compression.',
    category: 'Bug',
    priority: 'Medium',
    votes: 47,
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(config.database.uri);
    console.log('✅ Connected to MongoDB');

    // Clear existing feedback
    await Feedback.deleteMany({});
    console.log('🧹 Cleared existing feedback');

    // Insert sample feedback
    await Feedback.insertMany(sampleFeedbacks);
    console.log('🌱 Successfully seeded 10 feedback items');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
