# Website Rebuild Plan: Easton Volunteer Fire Company.com

## Project Overview

Rebuild the **Easton Volunteer Fire Company #1** website (https://evfc1.com/) using modern web technologies while preserving all content, images, and assets from the current site.

**Technology Stack:**
- Framework: Astro
- Styling: TailwindCSS
- Template: Titan Core (https://github.com/rspisarski/titan-core)

**Current Site Information:**
- Organization: Easton Volunteer Fire Company #1
- Established: 1921
- Location: 1 Center Road, Easton, CT 06612
- Phone: (203) 268-2833
- Social Media: Facebook

---

## Phase 1: Foundation Setup

### 1.1 Initialize Titan Core Template
- [ ] Clone Titan Core repository or use `npm create astro@latest -- --template rspisarski/titan-core`
- [ ] Install dependencies with `npm install`
- [ ] Verify local development server works (`npm run dev`)
- [ ] Review project structure and familiarize with component organization

### 1.2 Base Configuration
- [ ] Update `src/data/config.ts` with Easton Volunteer Fire Company site information
  - Site title: "Easton Volunteer Fire Company #1"
  - Tagline: "Serving Our Community Since 1921"
  - Contact information
  - Social media links
- [ ] Select and configure theme colors to match fire department branding (red/white/blue)
- [ ] Configure SEO metadata for fire department context
- [ ] Update navigation menu structure in `src/data/menu.ts`

### 1.3 Project Structure Setup
- [ ] Initialize git repository
- [ ] Create directory structure for EVFC-specific assets
- [ ] Set up environment variables if needed
- [ ] Create asset organization plan (images, documents, etc.)

---

## Phase 2: Content & Asset Migration

### 2.1 Content Extraction from evfc1.com
- [ ] Homepage content (mission statement, hero text, feature descriptions)
- [ ] About page content (history, mission, leadership)
- [ ] Apparatus page content (vehicle descriptions and specifications)
- [ ] Members page content (roster, roles, organizational structure)
- [ ] Join page content (recruitment information, requirements, benefits)
- [ ] Donate page content (donation information, impact statements, tax info)
- [ ] Carnival page content (event details, history, schedule)
- [ ] Contact page content (forms, emergency information, addresses)

### 2.2 Image & Media Assets
- [ ] Download company logo (multiple sizes/formats)
- [ ] Download apparatus/vehicle photos
- [ ] Download member/team photos
- [ ] Download carnival event photos
- [ ] Download any hero/banner images
- [ ] Download icons and graphic elements
- [ ] Organize assets in `src/assets/` and `public/` directories

### 2.3 Content Documentation
- [ ] Document current site's color scheme and branding
- [ ] Extract all contact information and emergency numbers
- [ ] Document external links (Town of Easton, EMS, Facebook)
- [ ] Note any special functionality or features to preserve
- [ ] Create content inventory spreadsheet/document

---

## Phase 3: Page-by-Page Implementation

### 3.1 Homepage (`src/pages/index.astro`)

**Layout Sections:**
1. **Hero Section**
   - [ ] Large background image of fire station or firefighters
   - [ ] Prominent heading: "Easton Volunteer Fire Company #1"
   - [ ] Subheading: "Serving Our Community Since 1921"
   - [ ] Call-to-action buttons: "Join Our Team" | "Donate" | "Emergency: Call 911"

2. **Quick Stats Section**
   - [ ] Years of service (since 1921)
   - [ ] Number of active members
   - [ ] Number of apparatus
   - [ ] Area/population served
   - Use Titan Core's stats component

3. **About Preview Section**
   - [ ] Brief mission statement
   - [ ] Link to full About page
   - [ ] Community service highlights

4. **Featured Apparatus Preview**
   - [ ] Showcase 3-4 primary apparatus with images
   - [ ] Brief descriptions
   - [ ] Link to full Apparatus page

5. **Upcoming Events/News**
   - [ ] Highlight carnival or upcoming events
   - [ ] Recent news or announcements
   - [ ] Consider using blog component for news

6. **Call-to-Action Sections**
   - [ ] Volunteer recruitment banner
   - [ ] Donation information
   - [ ] Contact information

7. **Footer**
   - [ ] Address: 1 Center Road, Easton, CT 06612
   - [ ] Phone: (203) 268-2833
   - [ ] Social media links (Facebook)
   - [ ] Quick links to all pages
   - [ ] Emergency information

---

### 3.2 About Page (`src/pages/about.astro`)

**Content Structure:**
- [ ] Hero section with "About Easton Volunteer Fire Company" heading
- [ ] History section
  - Founded in 1921
  - Historical milestones
  - Growth and evolution
- [ ] Mission & Values section
  - Mission statement
  - Core values
  - Community commitment
- [ ] Leadership section
  - Fire Chief and officers
  - Board of directors
  - Use Titan Core's team component
- [ ] Service area information
  - Coverage area
  - Mutual aid agreements
  - Relationship with Town of Easton and EMS
- [ ] Photo gallery or timeline

---

### 3.3 Apparatus Page (`src/pages/apparatus.astro`)

**Layout:**
- [ ] Hero section with "Our Apparatus" heading
- [ ] Grid layout for vehicles (2-3 columns)
- [ ] Each vehicle card includes:
  - High-quality photo
  - Vehicle name/number
  - Type (Engine, Ladder, Tanker, Rescue, etc.)
  - Year and manufacturer
  - Specifications (pump capacity, tank size, ladder length, etc.)
  - Primary purpose/capabilities
- [ ] Interactive elements (hover effects, modal for details)
- [ ] Option for filtering by type if many vehicles

---

### 3.4 Members Page (`src/pages/members.astro`)

**Content Sections:**
- [ ] Hero section with "Our Members" heading
- [ ] Leadership/Officer section
  - Chief and Assistant Chiefs
  - Captains and Lieutenants
  - President and Board officers
  - Photos and brief bios
- [ ] Active members roster
  - Organized by rank or seniority
  - Consider privacy preferences
- [ ] Recognition section
  - Years of service awards
  - Special recognitions
- [ ] Member benefits overview
- [ ] Call-to-action to Join page

---

### 3.5 Join/Recruitment Page (`src/pages/join.astro`)

**Structure:**
- [ ] Hero section: "Join Our Team"
- [ ] Why join section
  - Community service
  - Training opportunities
  - Camaraderie
  - Personal growth
- [ ] Requirements section
  - Age requirements
  - Residency requirements (if any)
  - Background check
  - Physical requirements
  - Time commitment
- [ ] Training information
  - Firefighter I & II certification
  - EMT training opportunities
  - Ongoing education
- [ ] Application process
  - Step-by-step guide
  - Required documents
  - Timeline
- [ ] Contact form or inquiry form
  - Use Titan Core's form component
  - Name, email, phone, message fields
  - "I'm interested in: [Firefighting/EMS/Support]" dropdown
- [ ] FAQ section specific to recruitment
- [ ] Testimonials from current members

---

### 3.6 Donate Page (`src/pages/donate.astro`)

**Content Sections:**
- [ ] Hero section: "Support Easton Volunteer Fire Company"
- [ ] Impact section
  - How donations are used
  - Equipment purchases
  - Training programs
  - Station maintenance
- [ ] Donation methods
  - Online payment (if available)
  - Check by mail
  - Address for mailing
- [ ] Donation levels (if applicable)
  - Recognition tiers
  - Corporate sponsorships
- [ ] Tax information
  - Tax-deductible status
  - EIN number (if public)
- [ ] Other ways to support
  - Amazon Smile
  - Corporate matching
  - Planned giving
- [ ] Thank you and recognition
  - Donor recognition (with permission)
- [ ] Contact for questions

---

### 3.7 Carnival Page (`src/pages/carnival.astro`)

**Layout:**
- [ ] Hero section with carnival branding
- [ ] Event overview
  - Annual tradition
  - History and significance
  - Community fundraiser
- [ ] Event details
  - Dates and hours
  - Location (at fire station or specify)
  - Admission information
- [ ] Activities and attractions
  - Rides
  - Games
  - Food vendors
  - Raffles and prizes
  - Live entertainment
- [ ] Photo gallery from past carnivals
  - Use grid or carousel layout
  - Community engagement photos
- [ ] Sponsorship opportunities
  - Corporate sponsors
  - How to sponsor
- [ ] Volunteer opportunities for carnival
- [ ] Contact for carnival committee

---

### 3.8 Contact Page (`src/pages/contact.astro`)

**Components:**
- [ ] Hero section: "Contact Us"
- [ ] Emergency information callout
  - **For Emergencies: Call 911**
  - Prominent banner/alert styling
- [ ] Contact form
  - Use Titan Core's form component
  - Fields: Name, Email, Phone, Subject, Message
  - Form submission handling
- [ ] Contact information section
  - **Address:** 1 Center Road, Easton, CT 06612
  - **Phone:** (203) 268-2833
  - **Email:** (if available)
  - **Office Hours:** (if applicable)
- [ ] Map integration
  - Embed Google Maps or similar
  - Pin location at 1 Center Road
- [ ] Department directory (optional)
  - Chief contact
  - Administrative contact
  - Carnival committee contact
- [ ] Social media links
  - Facebook page
  - Other platforms if available
- [ ] Related links
  - Town of Easton website
  - EMS website
  - State fire marshal resources

---

## Phase 4: Customization & Styling

### 4.1 Theme Customization
- [ ] Create custom color scheme matching fire department branding
  - Primary red (fire engine red)
  - White
  - Navy or dark blue
  - Accent colors for calls-to-action
- [ ] Update `src/data/config.ts` theme selection
- [ ] Create custom CSS overrides if needed in `src/styles/`
- [ ] Ensure sufficient color contrast for accessibility

### 4.2 Component Adaptation
- [ ] Customize Titan Core components for fire department context
- [ ] Create custom components as needed:
  - Apparatus card component
  - Emergency alert/banner component
  - Event calendar component (if needed)
- [ ] Adapt hero sections for each page
- [ ] Customize button styles and calls-to-action

### 4.3 Typography & Spacing
- [ ] Select appropriate fonts (professional, readable)
- [ ] Set up heading hierarchy
- [ ] Configure spacing and layout for content density
- [ ] Ensure mobile-friendly text sizing

### 4.4 Interactive Elements
- [ ] Add animations using AOS (already in Titan Core)
- [ ] Image galleries with lightbox/modal functionality
- [ ] Smooth scrolling navigation
- [ ] Hover effects on cards and links
- [ ] Form validation and user feedback

### 4.5 Responsive Design
- [ ] Test and refine mobile layouts (320px+)
- [ ] Test tablet layouts (768px+)
- [ ] Test desktop layouts (1024px+)
- [ ] Ensure images scale appropriately
- [ ] Mobile menu functionality
- [ ] Touch-friendly buttons and links

---

## Phase 5: Additional Features & Enhancements

### 5.1 Blog/News System (Optional)
- [ ] Decide if blog functionality should be used for news
- [ ] Create content collection for news/announcements
- [ ] Design news listing page
- [ ] Create individual news post template
- [ ] Add news preview to homepage

### 5.2 Event Calendar (Optional)
- [ ] Determine need for events calendar
- [ ] Integrate calendar component or service
- [ ] Add event listings to relevant pages
- [ ] Include carnival dates and training schedules

### 5.3 Forms & Functionality
- [ ] Set up form submission handling
  - Contact form
  - Join/recruitment inquiry form
  - Email service (FormSpree, Netlify Forms, etc.)
- [ ] Add form validation
- [ ] Create success/error messages
- [ ] Test form submissions

### 5.4 SEO & Performance
- [ ] Configure meta tags for all pages
- [ ] Create sitemap.xml
- [ ] Set up robots.txt
- [ ] Optimize images (WebP format, compression)
- [ ] Add alt text to all images
- [ ] Configure Open Graph tags for social sharing
- [ ] Test page load speeds
- [ ] Implement lazy loading for images

### 5.5 Accessibility
- [ ] Ensure WCAG 2.1 AA compliance
- [ ] Semantic HTML structure
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Screen reader testing
- [ ] Color contrast validation
- [ ] Focus indicators

---

## Phase 6: Testing & Quality Assurance

### 6.1 Functionality Testing
- [ ] Test all internal links
- [ ] Test all external links
- [ ] Test form submissions
- [ ] Test navigation menu (desktop and mobile)
- [ ] Test image loading and galleries
- [ ] Test on slow network connections

### 6.2 Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### 6.3 Device Testing
- [ ] iPhone (various sizes)
- [ ] Android phones
- [ ] iPad/tablets
- [ ] Desktop (various screen sizes)
- [ ] Test in landscape and portrait orientations

### 6.4 Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize any performance issues
- [ ] Target 90+ scores in all categories

### 6.5 Content Review
- [ ] Proofread all text content
- [ ] Verify all contact information
- [ ] Check phone numbers and addresses
- [ ] Verify external links
- [ ] Review image quality and relevance

---

## Phase 7: Deployment & Launch

### 7.1 Pre-Deployment
- [ ] Choose hosting platform (Netlify, Vercel, Cloudflare Pages, etc.)
- [ ] Set up domain configuration (evfc1.com)
- [ ] Configure SSL certificate
- [ ] Set up environment variables (if needed)
- [ ] Create deployment scripts

### 7.2 Deployment
- [ ] Build production version (`npm run build`)
- [ ] Test production build locally
- [ ] Deploy to staging environment
- [ ] Final testing on staging
- [ ] Deploy to production

### 7.3 Post-Launch
- [ ] Monitor for errors or issues
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Submit to search engines
- [ ] Update any external references to old site
- [ ] Create backup of old site before decommissioning

### 7.4 Documentation
- [ ] Create content management guide
- [ ] Document how to update pages
- [ ] Document how to add news/events
- [ ] Document deployment process
- [ ] Create troubleshooting guide

---

## Questions & Considerations

### Before Starting:
1. **Asset Access:** Do you have access to download all images and assets from evfc1.com, or do we need to extract them programmatically?

2. **Blog/News Functionality:** Do you want to maintain the blog functionality from Titan Core for departmental news and announcements?

3. **Critical Features:** Are there any specific features or functionality from the current evfc1.com that are particularly important to preserve?

4. **Color Scheme:** Do you have specific brand colors, or should we use traditional fire department red/white/blue?

5. **External Integrations:** Do you need integration with:
   - Donation platforms (PayPal, Stripe, etc.)?
   - Event calendar systems?
   - Email marketing services?
   - Social media feeds?

6. **Content Management:** Who will be updating the site after launch, and what level of technical expertise do they have?

7. **Forms:** Where should form submissions be sent? Do you have an existing email or CRM system?

8. **Privacy:** Are there any privacy considerations for member information or photos?

9. **Timeline:** Is there a target launch date or any time-sensitive content (like carnival dates)?

10. **Budget:** Are there any budget constraints for hosting, domain, or third-party services?

---

## Timeline Estimate

**Phase 1 (Setup):** 1-2 days
**Phase 2 (Content Migration):** 2-3 days
**Phase 3 (Page Implementation):** 5-7 days
**Phase 4 (Customization):** 3-4 days
**Phase 5 (Features):** 2-3 days
**Phase 6 (Testing):** 2-3 days
**Phase 7 (Deployment):** 1-2 days

**Total Estimated Time:** 16-24 days of development work

*Note: Timeline can be compressed with parallel work or extended based on content availability and feedback cycles.*

---

## Success Criteria

The project will be considered successful when:

- ✓ All pages from evfc1.com have been migrated with content intact
- ✓ All images and assets are properly displayed and optimized
- ✓ Site is fully responsive across all devices
- ✓ Performance scores are 90+ in Lighthouse
- ✓ Forms are functional and submissions are received
- ✓ Contact information is accurate and prominent
- ✓ Emergency information (911) is clearly visible
- ✓ Site is accessible (WCAG 2.1 AA compliant)
- ✓ SEO is properly configured
- ✓ Site is deployed and live on evfc1.com domain
- ✓ Stakeholders are trained on content updates

---

## Next Steps

1. Review this plan and provide answers to the questions above
2. Begin Phase 1: Foundation Setup
3. Start content and asset extraction from current site
4. Maintain regular check-ins for feedback and approval
5. Iterate based on stakeholder feedback

---

**Document Version:** 1.0
**Last Updated:** October 14, 2025
**Project:** evfc1.com Website Rebuild
**Template:** Titan Core (Astro + TailwindCSS)
