# 💕 Valentine's Gift - A Love Story in Code

A beautiful, romantic web app created as a Valentine's Day gift. Built with Next.js, Framer Motion, and lots of love.

## ✨ Features

### 🔐 Unlock My Heart Entry Screen
- Password-protected entrance (set to your special date)
- Beautiful unlock animation when correct password is entered
- Cute error message for wrong attempts

### 🎧 Soundtrack of Us
- Showcase your special songs together
- Each song card reveals a memory when tapped
- Beautiful gradient cards with animations

### 💌 Open When... Digital Letters
- Clickable envelope letters for different moments
- Categories: sad, doubting, missing, need motivation, can't sleep
- Gorgeous modal with letter paper texture

### 💭 Things I Never Say Enough
- Minimalist, powerful affirmations
- Typewriter effect for emotional impact
- Clean, white aesthetic with subtle animations

### 🎥 Message From the Future
- A letter written as if from 20 years in the future
- Time capsule animation to reveal the letter
- Emotional, heartfelt content

### ❤️ Choose Your Message
- Interactive buttons for different emotional needs
- Categories: motivation, smile, love, anxiety, beauty, hugs
- Personalized messages for each selection

### 🪄 Hidden Easter Egg
- Tap the heart on the home page 5 times
- Unlock a special "hug coupon" surprise!

## 🛠️ Customization

### Setting Your Password
Edit `src/app/page.tsx` and change the `SECRET_PASSWORD`:

```typescript
const SECRET_PASSWORD = '14022020'; // Change to your special date
```

### Customizing Songs
Edit `src/components/pages/SoundtrackPage.tsx` to add your own songs and memories:

```typescript
const songs: Song[] = [
  {
    title: 'Your Song Title',
    artist: 'Artist Name',
    memory: 'Your special memory with this song...',
    emoji: '🎵',
    color: 'from-rose-400 to-pink-500',
  },
  // Add more songs...
];
```

### Customizing Letters
Edit `src/components/pages/LettersPage.tsx` to personalize the "Open When" letters.

### Customizing Messages
Edit `src/components/pages/MessagesPage.tsx` and `FuturePage.tsx` to add your own messages.

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy!

## 💡 Pro Tips

1. **Send at Midnight**: Deploy the site and send the link exactly at midnight on Valentine's Day
2. **Custom Domain**: Use a romantic custom domain like `iloveyou-[hername].vercel.app`
3. **Mobile First**: The app is optimized for mobile - perfect for her to view on her phone
4. **Add Photos**: You can extend the app to include a photo gallery
5. **Background Music**: Consider adding an auto-play song (with user interaction first)

## 💝 Made with Love

This project was created as a gift of love. Feel free to customize it, make it your own, and share the love!

---

*"Every love story is beautiful, but ours is my favorite."*
