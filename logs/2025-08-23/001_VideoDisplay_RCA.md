# Root Cause Analysis: Video Display & Rectangle Issue
**File**: 001_VideoDisplay_RCA.md  
**Date**: 2025-08-23  
**Status**: Critical - Multiple Issues Identified

---

## Executive Summary
Two persistent issues are affecting the hero section:
1. **.mov video file not playing/displaying**
2. **Visible rectangular divide/boundary in hero section**

Despite multiple attempts to fix these issues, they persist, indicating deeper structural or compatibility problems.

---

## Issue 1: .MOV Video Not Playing

### Current Implementation
```tsx
<video 
  autoPlay={true}
  muted={true}
  loop={true}
  playsInline={true}
  preload="auto"
  className="absolute top-0 left-0 w-full h-full object-cover"
  style={{ 
    minWidth: '100%',
    minHeight: '100%',
    opacity: 0.4,
    filter: 'brightness(0.6)'
  }}
>
  <source src="/assets/hero-video-bg.mov" type="video/quicktime" />
</video>
```

### Root Causes Identified

#### 1. **Browser Compatibility Issue** ⚠️
- **Problem**: Most browsers don't natively support .mov (QuickTime) format
- **Evidence**: 
  - Chrome/Firefox primarily support MP4, WebM, Ogg
  - .mov requires QuickTime plugin or specific codec support
- **Impact**: Video element exists but cannot decode/play the file

#### 2. **File Size Issue** ⚠️
- **Problem**: 167MB .mov file is extremely large
- **Evidence**: `hero-video-bg.mov` is 167MB
- **Impact**: 
  - May timeout during loading
  - Browser may refuse to load large files
  - Next.js dev server might struggle serving large files

#### 3. **MIME Type Mismatch** ⚠️
- **Problem**: Server might not serve correct MIME type for .mov
- **Evidence**: Using `type="video/quicktime"` but server might send different type
- **Impact**: Browser rejects video due to MIME type mismatch

#### 4. **Next.js Static File Serving** ⚠️
- **Problem**: Next.js might not properly serve large .mov files
- **Evidence**: File is in public folder but not playing
- **Impact**: 404 or timeout when requesting video

---

## Issue 2: Rectangular Divide in Hero Section

### Visual Symptoms
- Visible rectangle/boundary within hero section
- Appears as a subtle box or divided area
- Not the intended seamless background effect

### Root Causes Identified

#### 1. **Video Container Dimensions** 🔍
```tsx
<div className="absolute inset-0">  // Parent container
  <video className="absolute top-0 left-0 w-full h-full object-cover">
```
- **Problem**: Double absolute positioning creating layout conflict
- **Evidence**: Both parent div and video have absolute positioning
- **Impact**: Video might not fill container properly, creating visible boundaries

#### 2. **PaddingTop Conflict** 🔍
```tsx
style={{ 
  backgroundColor: '#04070d',
  minHeight: '100vh',
  paddingTop: '64px'  // This creates a 64px offset
}}
```
- **Problem**: paddingTop pushes content down but video starts at top:0
- **Evidence**: 64px gap between video start and content start
- **Impact**: Creates visible boundary at 64px from top

#### 3. **Radial Gradient Overlay** 🔍
```tsx
<div style={{
  width: '800px',
  height: '400px',
  background: 'radial-gradient(...)',
  filter: 'blur(2px)'
}}/>
```
- **Problem**: Fixed width (800px) gradient on variable width screen
- **Evidence**: Gradient is 800px wide but viewport could be wider
- **Impact**: Creates visible edges where gradient ends

#### 4. **Multiple Overlay Layers** 🔍
```tsx
1. Video with opacity: 0.4
2. Black overlay with opacity: 0.6
3. Radial gradient with blur
```
- **Problem**: Layering creates visible boundaries between elements
- **Evidence**: Three semi-transparent layers stacking
- **Impact**: Edge artifacts where layers meet/overlap

#### 5. **Z-Index Stacking Context** 🔍
- **Problem**: Content has z-10 but video container has no z-index
- **Evidence**: Main content at z-10, video container implicit z-index
- **Impact**: Browser might render intermediate layer creating boundary

---

## Proposed Solutions

### For Video Playback:

#### Solution A: Convert to MP4
```bash
ffmpeg -i hero-video-bg.mov -c:v libx264 -crf 23 -preset fast -c:a aac hero-video-bg.mp4
```
- Convert .mov to widely supported MP4
- Compress to reduce file size (<50MB recommended)

#### Solution B: Use Multiple Formats
```tsx
<video>
  <source src="/assets/hero-video-bg.webm" type="video/webm" />
  <source src="/assets/hero-video-bg.mp4" type="video/mp4" />
  <source src="/assets/hero-video-bg.mov" type="video/quicktime" />
</video>
```

#### Solution C: Use Video CDN
- Upload to Cloudinary/Vimeo/YouTube
- Use iframe or video player SDK
- Automatic format conversion and optimization

### For Rectangle Issue:

#### Solution A: Simplified Structure
```tsx
<section className="relative w-full h-screen overflow-hidden bg-black">
  <video 
    className="absolute inset-0 w-full h-full object-cover"
    style={{ transform: 'scale(1.1)' }}  // Slight scale to hide edges
  >
  <div className="absolute inset-0 bg-black/50" />  // Single overlay
  <div className="relative z-10 h-full flex items-center">
    {/* Content */}
  </div>
</section>
```

#### Solution B: Remove Padding Conflict
```tsx
// Remove paddingTop from section
// Add margin-top to content instead
<section style={{ minHeight: '100vh' }}>
  <div style={{ marginTop: '64px' }}>
    {/* Content */}
  </div>
</section>
```

#### Solution C: Full Bleed Video
```tsx
<video 
  className="fixed top-0 left-0 w-screen h-screen object-cover"
  style={{ 
    width: '100vw',
    height: '100vh',
    objectFit: 'cover'
  }}
/>
```

---

## Testing Checklist

### Video Testing:
- [ ] Check browser console for video errors
- [ ] Test in Chrome, Firefox, Safari
- [ ] Verify network tab shows video loading
- [ ] Check video codec support: `video.canPlayType('video/quicktime')`
- [ ] Test with smaller video file (<10MB)

### Rectangle Issue Testing:
- [ ] Inspect element boundaries in DevTools
- [ ] Check computed styles for unexpected margins/padding
- [ ] Disable each overlay layer individually
- [ ] Test on different screen sizes
- [ ] Check z-index stacking in 3D view (Chrome DevTools)

---

## Immediate Action Items

1. **Convert .mov to .mp4** (Priority: HIGH)
   - Use ffmpeg or online converter
   - Target size: <30MB
   - Resolution: 1920x1080 max

2. **Simplify DOM structure** (Priority: HIGH)
   - Remove nested absolute positioning
   - Use single overlay layer
   - Fix padding/margin conflicts

3. **Add debug logging** (Priority: MEDIUM)
   ```tsx
   onCanPlay={() => console.log('Video can play')}
   onCanPlayThrough={() => console.log('Video can play through')}
   onSuspend={() => console.log('Video suspended')}
   onStalled={() => console.log('Video stalled')}
   ```

4. **Test with known working video** (Priority: HIGH)
   - Use public MP4 test video
   - Verify video element works at all

---

## Conclusion

The issues stem from:
1. **Format incompatibility** (.mov not supported)
2. **Complex layering** creating visual artifacts
3. **Positioning conflicts** between padding and absolute elements

The rectangular divide is likely caused by the combination of `paddingTop: 64px` on the section and absolute positioning of the video, creating a 64px "dead zone" that appears as a rectangle.

**Next Steps**: Implement Solution A for both issues as the most straightforward fix.