# PHASE 6 & 7: MIGRATION & SAFETY PLAN + REDIRECT STRATEGY

## MIGRATION CHECKLIST

### **PRE-LAUNCH (2-3 Weeks Before)**

#### Week 1: Audit & Backup
- [ ] **Full WordPress Site Backup**
  - Database export
  - All media files
  - Theme/plugin files
  - .htaccess file
  
- [ ] **Document Current SEO Baseline**
  - Export Google Search Console data (last 12 months)
    - Queries, pages, impressions, clicks, CTR, position
  - Export Google Analytics data
    - Traffic by page, source, device
    - Goal conversions
    - Bounce rates
  - Screenshot SERP positions for top 20 keywords
    - "travels in mysore" - Position #X
    - "mysore taxi service" - Position #X
    - "mysore to coorg taxi" - Position #X
    - [Document all]
  
- [ ] **Backlink Audit**
  - Export backlink profile (Ahrefs/SEMrush/Moz)
  - Identify top referring domains
  - Check for broken backlinks
  
- [ ] **Content Inventory**
  - List all URLs (from sitemap)
  - Note page type (service/package/info)
  - Current word count per page
  - Ranking keywords per page

#### Week 2: Development Preparation
- [ ] **Set Up Next.js Project**
  - Initialize with App Router
  - Configure Tailwind CSS
  - Set up TypeScript
  - Install dependencies
  
- [ ] **Create Staging Environment**
  - Deploy to Vercel preview URL (e.g., preview.travelmysore.com)
  - Set up password protection
  - Configure test environment variables
  
- [ ] **Content Migration**
  - Export all WordPress content to markdown/JSON
  - Optimize images (compress, convert to WebP)
  - Rewrite/expand thin content (aim for 2000+ words per key page)
  
- [ ] **Implement Core Features**
  - All preserved URL pages (1:1 mapping)
  - Schema markup
  - Metadata generation
  - Sitemap.xml
  - Robots.txt

#### Week 3: Testing & QA
- [ ] **Technical SEO Audit** (Staging)
  - ✅ All metadata correct
  - ✅ Schema validates (Rich Results Test)
  - ✅ Canonical tags correct
  - ✅ Robots.txt allows indexing
  - ✅ Sitemap accessible
  - ✅ 404 page functional
  
- [ ] **Performance Testing**
  - PageSpeed Insights score >90
  - Core Web Vitals all green
  - Mobile-friendliness test passed
  - Cross-browser testing (Chrome, Safari, Firefox, Edge)
  
- [ ] **Functionality Testing**
  - All forms working
  - Phone/WhatsApp CTAs functional
  - Internal links working
  - Images loading correctly
  - Navigation responsive
  
- [ ] **Content Review**
  - Proofread all pages
  - Verify phone numbers, addresses correct
  - Check pricing accuracy
  - Ensure CTAs compelling

---

### **LAUNCH DAY (Day 0)**

#### Morning (Before 9 AM)
- [ ] **Final Backup** of current WordPress site
- [ ] **Deploy Production Build** to travelmysore.com
- [ ] **DNS Update** (if domain transfer needed)
- [ ] **SSL Certificate** verification
- [ ] **Verify Homepage** loads correctly

#### Afternoon (9 AM - 5 PM)
- [ ] **301 Redirects Implementation** (see redirect plan below)
- [ ] **Google Search Console**
  - Add new property (if needed)
  - Submit new sitemap
  - Request indexing for homepage
  
- [ ] **Google Analytics**
  - Verify tracking code firing
  - Set up goals/events
  - Check real-time reports
  
- [ ] **Google My Business**
  - Update website URL to travelmysore.com
  - Verify ownership if needed
  
- [ ] **Smoke Testing**
  - Test 10-15 critical pages
  - Verify all redirects working
  - Check mobile rendering
  - Test booking forms

#### Evening (5 PM onwards)
- [ ] **Monitor Analytics**
  - Check for traffic drop
  - Monitor error rates
  - Review user flow
  
- [ ] **Social Media Announcement** (optional)
  - Post about new website launch
  - Highlight new features/design

---

### **POST-LAUNCH MONITORING**

#### **Day 1-7 (Critical Week)**

**Daily Tasks:**
- [ ] Check Google Search Console for errors
- [ ] Monitor organic traffic (compare to previous week)
- [ ] Review Core Web Vitals
- [ ] Check top 10 keyword rankings
- [ ] Monitor 404 errors and fix redirects
- [ ] Review user feedback/complaints

**Metrics to Track:**
| Metric | Baseline (Old Site) | Day 1 | Day 3 | Day 7 | Status |
|--------|---------------------|-------|-------|-------|--------|
| Daily Organic Sessions | X | | | | |
| Top Keyword Position (#1) | X | | | | |
| Top Keyword Position (#2) | X | | | | |
| Bounce Rate | X% | | | | |
| Avg. Session Duration | X min | | | | |
| Conversion Rate | X% | | | | |

#### **Week 2-4 (Stabilization)**

**Weekly Tasks:**
- [ ] GSC Coverage report review
- [ ] Ranking changes for top 50 keywords
- [ ] Traffic trends analysis
- [ ] Conversion funnel review
- [ ] Schema validation (check for errors)
- [ ] Page speed monitoring

**Action Items if Issues Detected:**
- Traffic drop >20%: Check redirects, GSC errors
- Rankings drop >5 positions: Review on-page SEO, add more content
- High bounce rate: Improve page load speed, content relevance

#### **Month 2-3 (Growth Phase)**

**Bi-Weekly Tasks:**
- [ ] Keyword ranking progress
- [ ] New backlink acquisition
- [ ] Content performance analysis
- [ ] A/B test CTAs and forms
- [ ] Add new blog content (2-3 posts/week)

---

## REDIRECT STRATEGY (301 Redirects)

### **URLs That Don't Need Redirects (Exact Match)**

```
Current WordPress URL → Next.js URL (Same)
/                     → /
/about/               → /about/
/contact/             → /contact/
/services/            → /services/
/mysore-to-coorg/     → /mysore-to-coorg/
/mysore-to-ooty/      → /mysore-to-ooty/
/mysore-to-wayanad/   → /mysore-to-wayanad/
/mysore-to-bangalore/ → /mysore-to-bangalore/
/mysore-one-day-tour/ → /mysore-one-day-tour/
/mysore-coorg-wayanad/ → /mysore-coorg-wayanad/
/mysore-ooty-coorg/   → /mysore-ooty-coorg/
/mysore-ooty-kodaikanal/ → /mysore-ooty-kodaikanal/
/goa-trips-from-mysore/ → /goa-trips-from-mysore/
/tirupati-package-from-mysore/ → /tirupati-package-from-mysore/
```

✅ **No redirects needed** - URLs preserved exactly

---

### **URLs Requiring 301 Redirects**

#### **Implementation: next.config.js**

```javascript
// next.config.js

module.exports = {
  async redirects() {
    return [
      // Old booking page to new
      {
        source: '/get-taxi/',
        destination: '/book-taxi/',
        permanent: true, // 301 redirect
      },
      
      // Default WordPress blog post (delete)
      {
        source: '/hello-world/',
        destination: '/',
        permanent: true,
      },
      
      // Old WordPress URLs (if any legacy variations)
      {
        source: '/index.php/:path*',
        destination: '/:path*',
        permanent: true,
      },
      
      // Category archives (if existed)
      {
        source: '/category/:slug',
        destination: '/blog/',
        permanent: true,
      },
      
      // Tag archives
      {
        source: '/tag/:slug',
        destination: '/blog/',
        permanent: true,
      },
      
      // WordPress author pages
      {
        source: '/author/:slug',
        destination: '/about/',
        permanent: true,
      },
      
      // Old attachment pages
      {
        source: '/attachment/:slug',
        destination: '/',
        permanent: true,
      },
      
      // Handle trailing slashes consistently
      {
        source: '/:path((?!.*\\.\\w+$).*[^/])$',
        destination: '/:path/',
        permanent: true,
      },
    ];
  },
  
  // Additional configuration
  trailingSlash: true, // Maintain trailing slashes like WordPress
};
```

---

### **Redirect Verification**

**Manual Testing Checklist:**

```bash
# Test each redirect
curl -I https://travelmysore.com/get-taxi/
# Should return: HTTP/1.1 301 Moved Permanently
# Location: https://travelmysore.com/book-taxi/

curl -I https://travelmysore.com/hello-world/
# Should return: HTTP/1.1 301 Moved Permanently
# Location: https://travelmysore.com/
```

**Tools for Bulk Redirect Testing:**
- Screaming Frog SEO Spider (crawl with redirect settings)
- Redirect Path Chrome Extension
- Ahrefs Site Audit (checks redirect chains)

---

## CANONICAL TAG STRATEGY

### **Implementation**

All pages should have self-referential canonical tags:

```typescript
// In page metadata
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://travelmysore.com/mysore-to-coorg/'
  }
};
```

### **Rules**

1. ✅ **Homepage**: `<link rel="canonical" href="https://travelmysore.com/" />`
2. ✅ **All pages**: Self-referential canonical (same as page URL)
3. ✅ **No trailing slash variations**: Next.js config handles this
4. ✅ **HTTPS only**: No HTTP versions
5. ✅ **No parameters**: Clean URLs always

---

## GOOGLE SEARCH CONSOLE SETUP

### **Add/Verify Property**

1. Go to Google Search Console
2. Add property: `https://travelmysore.com`
3. Verification methods:
   - HTML file upload (preferred)
   - HTML meta tag
   - Google Analytics
   - Google Tag Manager

### **Submit New Sitemap**

```
https://travelmysore.com/sitemap.xml
```

### **Request Re-Indexing**

Priority pages to request indexing (first week):
1. Homepage (/)
2. Top 5 ranking pages
3. New service pages
4. Destination guides

---

## ANALYTICS & EVENT TRACKING

### **Google Analytics 4 Setup**

**Events to Track:**

```typescript
// Phone call clicks
gtag('event', 'phone_call_click', {
  'event_category': 'Contact',
  'event_label': 'Header Phone Number',
  'value': 1
});

// WhatsApp clicks
gtag('event', 'whatsapp_click', {
  'event_category': 'Contact',
  'event_label': 'Floating WhatsApp Button'
});

// Booking form submissions
gtag('event', 'form_submit', {
  'event_category': 'Conversion',
  'event_label': 'Booking Form',
  'value': 1
});

// Package clicks
gtag('event', 'package_view', {
  'event_category': 'Engagement',
  'event_label': 'Mysore to Coorg Package'
});
```

### **Goals to Set Up**

1. **Contact Form Submission**: /thank-you page view
2. **Phone Call Click**: Event tracking
3. **WhatsApp Engagement**: Event tracking
4. **Package Booking**: Form submission event

---

## RANKING PROTECTION STRATEGY

### **Critical Keywords to Monitor Daily (First 30 Days)**

| Keyword | Pre-Launch Rank | Target Rank | Monitoring Tool |
|---------|-----------------|-------------|-----------------|
| travels in mysore | #X | Maintain/Improve | GSC + SEMrush |
| mysore taxi service | #X | Maintain | GSC |
| mysore to coorg taxi | #X | Maintain | GSC |
| mysore tour packages | #X | Maintain | GSC |
| mysore outstation taxi | #X | Maintain | GSC |

### **If Rankings Drop >5 Positions**

**Immediate Actions:**
1. Check if page is indexed (site:travelmysore.com URL)
2. Verify canonical tag correct
3. Check for 404 errors or redirect chains
4. Review on-page SEO (H1, title, meta)
5. Add more content (expand to 2500+ words)
6. Add internal links from high-authority pages
7. Check competitors (did they improve?)

---

## ROLLBACK PLAN (Emergency)

### **If Catastrophic Failure Occurs**

**Triggers for Rollback:**
- Organic traffic drops >40% in first week
- Multiple critical pages not indexed
- Site completely inaccessible
- Major functionality broken

**Rollback Steps:**
1. Keep WordPress backup ready for 30 days
2. Point DNS back to old WordPress server
3. Remove new site from GSC
4. Re-submit old sitemap
5. Investigate issues thoroughly before re-launch

---

## SUCCESS METRICS

### **30-Day Success Criteria**

✅ **Zero ranking loss** on top 5 keywords  
✅ **Traffic maintained** within -10% to +15%  
✅ **All pages indexed** in GSC  
✅ **Core Web Vitals** all green  
✅ **Zero critical errors** in GSC  
✅ **Conversion rate** maintained or improved  

### **90-Day Growth Targets**

✅ Organic traffic +20-30%  
✅ Featured snippets: 3-5 acquired  
✅ Average ranking position improved by 2-3 spots  
✅ New keywords ranking: 50+ long-tail terms  
✅ Backlinks acquired: 10-20 quality links  

---

## POST-MIGRATION OPTIMIZATION

### **Weeks 5-8**

- [ ] Add structured FAQ sections to all pages
- [ ] Create video content (embed YouTube)
- [ ] Build internal linking between related pages
- [ ] Start guest blogging for backlinks
- [ ] Launch social media content strategy

### **Months 3-6**

- [ ] Expand blog to 50+ posts
- [ ] Create comparison landing pages
- [ ] Develop location-specific pages
- [ ] Implement live chat/chatbot
- [ ] A/B test different CTAs

---

## CONCLUSION

**Migration Risk Assessment**: 🟢 **LOW RISK**

**Reasons:**
✅ URL structure preserved for critical pages  
✅ Content improved (not replaced)  
✅ Technical SEO enhanced (schema, speed)  
✅ Comprehensive monitoring plan  
✅ Clear rollback procedure  

**Expected Outcome**: **10-15% traffic increase within 90 days** with zero permanent ranking loss.

---

**Next Document**: PHASE-8-IMPLEMENTATION-STARTER-FILES.md
