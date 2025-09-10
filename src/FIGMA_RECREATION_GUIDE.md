# Financial Wrapped - Figma Recreation Guide

This guide will help you recreate your exact Financial Wrapped designs in Figma with pixel-perfect accuracy.

## Table of Contents
1. [Setup & Preparation](#setup--preparation)
2. [Design System Setup](#design-system-setup)
3. [Component Creation](#component-creation)
4. [Layout Recreation](#layout-recreation)
5. [Advanced Techniques](#advanced-techniques)

## Setup & Preparation

### Step 1: Export Design Specifications
1. Run your app with the DesignSpecs component
2. Visit the design specifications page
3. Export the JSON file with all design tokens
4. Keep this reference handy throughout the process

### Step 2: Create New Figma File
1. Create a new Figma file named "Financial Wrapped"
2. Set up your canvas with the following pages:
   - **Design System** - Colors, typography, components
   - **Mobile Slides** - All mobile wrapped slides
   - **Desktop Slides** - All desktop wrapped slides
   - **Complete Layouts** - Full app layouts

### Step 3: Install Figma Plugins (Recommended)
- **Content Reel** - For realistic financial data
- **Unsplash** - For placeholder images (if needed)
- **Color Palettes** - For gradient management
- **Auto Layout** - Enhanced auto layout features

## Design System Setup

### Colors & Variables

#### Step 1: Create Color Variables
1. Go to your Design System page
2. Create local variables for each color:
   ```
   Primary/Background: #FFFFFF
   Primary/Foreground: #030213
   Primary/Brand: #030213
   Secondary/Background: #ECECF0
   Secondary/Muted: #717182
   
   Gradients/Purple-Start: #8B5CF6
   Gradients/Purple-End: #3B82F6
   Gradients/Pink-Start: #EC4899
   Gradients/Pink-End: #F59E0B
   
   Semantic/Success: #10B981
   Semantic/Warning: #F59E0B
   Semantic/Error: #EF4444
   ```

#### Step 2: Create Gradient Styles
1. Create gradient styles for common gradients:
   - **Purple-Blue**: Linear gradient from #8B5CF6 to #3B82F6
   - **Pink-Orange**: Linear gradient from #EC4899 to #F59E0B
   - **Success-Gradient**: Subtle gradient using success green

### Typography System

#### Step 1: Set Up Text Styles
Create text styles with these specifications:

```
Heading/H1-Large: 48px, Weight 600, Line Height 1.2
Heading/H1-Medium: 32px, Weight 600, Line Height 1.3
Heading/H2: 24px, Weight 500, Line Height 1.4
Heading/H3: 20px, Weight 500, Line Height 1.4

Body/Large: 18px, Weight 400, Line Height 1.5
Body/Medium: 16px, Weight 400, Line Height 1.5
Body/Small: 14px, Weight 400, Line Height 1.5
Body/Caption: 12px, Weight 400, Line Height 1.4

Interactive/Button: 16px, Weight 500, Line Height 1.0
Interactive/Link: 14px, Weight 500, Line Height 1.5
```

#### Step 2: Set Base Font
- Use system fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- Set default font size to 14px

### Spacing & Layout

#### Step 1: Create Spacing Variables
```
Space/XS: 4px
Space/SM: 8px  
Space/MD: 12px
Space/BASE: 16px
Space/LG: 20px
Space/XL: 24px
Space/2XL: 32px
Space/3XL: 40px
Space/4XL: 48px
Space/5XL: 64px
```

#### Step 2: Border Radius Variables
```
Radius/SM: 6px
Radius/MD: 8px
Radius/LG: 12px
Radius/XL: 16px
Radius/XXL: 32px (for iPhone mockup)
```

## Component Creation

### iPhone Mockup Component

#### Step 1: Create Base Frame
1. Create a frame: 320px × 640px
2. Name it "iPhone Mockup"
3. Apply corner radius: 32px
4. Fill: #1C1C1E (dark gray for device)

#### Step 2: Add Screen Area
1. Create inner frame: 304px × 608px
2. Position: 8px from left/right, 16px from top/bottom
3. Corner radius: 24px
4. Fill: #000000 (black screen background)

#### Step 3: Add Device Details
1. **Notch**: Small rounded rectangle at top center (60px × 4px, radius 2px)
2. **Home indicator**: Rounded rectangle at bottom (134px × 5px, radius 2.5px)
3. **Side buttons**: Small rectangles on frame edges
4. Apply subtle shadows and highlights for realism

#### Step 4: Convert to Component
1. Select all layers
2. Create component (Cmd/Ctrl + Alt + K)
3. Name: "iPhone 15 Mockup"
4. Add component description

### Mobile Slide Template

#### Step 1: Create Slide Container
1. Frame: 320px × 568px (fits inside iPhone screen)
2. Auto layout: Vertical, 32px padding all sides
3. Fill: White (#FFFFFF)

#### Step 2: Create Content Sections
1. **Header area**: Auto layout, align center, 24px gap
2. **Main content**: Auto layout, flexible height, 20px gap
3. **Action area**: Auto layout, align center, 16px gap

#### Step 3: Make Master Component
1. Create component from slide template
2. Name: "Mobile Slide Template"
3. Add instance properties for:
   - Background (Color/Gradient)
   - Header visibility (Boolean)
   - Action area visibility (Boolean)

### Action Card Component

#### Step 1: Create Card Structure
1. Auto layout frame: Horizontal, 16px padding
2. Min height: 80px
3. Corner radius: 8px
4. Fill: White with subtle border

#### Step 2: Add Icon Area
1. Frame: 40px × 40px
2. Corner radius: 8px
3. Gradient background
4. Icon placeholder (24px × 24px)

#### Step 3: Add Text Content
1. Auto layout: Vertical, 12px gap
2. Title: Body/Medium text style
3. Description: Body/Small, muted color

#### Step 4: Component Properties
1. Icon (Instance swap)
2. Background gradient (Color)
3. Title text (Text)
4. Description text (Text)

## Layout Recreation

### Mobile Slide Layouts

#### Welcome Slide
1. **Structure**:
   - Header: "Your 2024 Financial Year" (H1-Large)
   - Subtitle: "in review" (H1-Large, muted)
   - Decorative element: Gradient circle or pattern
   - Action: "Let's dive in" button

2. **Styling**:
   - Background: White
   - Title: Primary color (#030213)
   - Gradient elements: Purple-Blue gradient
   - Center alignment throughout

#### Total Spending Slide
1. **Structure**:
   - Small title: "You spent a total of"
   - Large amount: "£12,486" (H1-Large)
   - Comparison: "That's 23% less than last year!" (success color)
   - Progress visualization
   - Action cards for budget setting

2. **Data Visualization**:
   - Large circular progress indicator
   - Percentage change with trend arrow
   - Color-coded comparison (green for positive)

#### Top Categories Slide
1. **Structure**:
   - Title: "Your top spending categories"
   - Category list with bars and amounts
   - Visual bar chart representation
   - Action cards for spending alerts

2. **Category Items**:
   - Auto layout: Horizontal alignment
   - Category name + icon
   - Amount in £
   - Progress bar (width based on percentage)
   - Distinct colors for each category

#### Savings Slide
1. **Structure**:
   - Title: "You saved"
   - Large amount: "£2,847"
   - Achievement message
   - Savings streak indicator
   - Challenge action cards

2. **Achievements**:
   - Badge-style achievement indicators
   - Progress rings for goals
   - Celebration micro-animations (indicate in Figma with motion blur)

#### Summary Slide
1. **Structure**:
   - Title: "Your Financial Highlights"
   - Key metrics grid (2×2 layout)
   - Recommendation preview
   - Share/export actions

2. **Metrics Grid**:
   - Each metric: Icon + Label + Value
   - Consistent spacing: 16px gaps
   - Color-coded by category

### Desktop Slide Layouts

#### Desktop Grid Layout
1. **Container**: 1200px wide, centered
2. **Grid**: 3×3 or 4×2 layout with 24px gaps
3. **Individual slides**: 400px × 300px each
4. **Responsive behavior**: Annotate breakpoints

#### Individual Desktop Slides
- Same content as mobile but adapted for landscape
- More compact vertical spacing
- Side-by-side layouts where appropriate
- Reduced font sizes proportionally

## Advanced Techniques

### Gradient Management

#### Creating Complex Gradients
1. **Multi-stop gradients**:
   - Use 3+ color stops for depth
   - Position stops at: 0%, 50%, 100%
   - Add transparency for overlay effects

2. **Radial gradients**:
   - Center on key elements
   - Use for spotlight effects
   - Combine with blur for depth

#### Gradient Component Variants
1. Create gradient rectangle components
2. Use component properties for different gradients
3. Apply as background overlays

### Animation Preparation

#### Setting up Animation Frames
1. Create multiple frames for each animated state
2. Name consistently: "State-Default", "State-Hover", "State-Active"
3. Use Smart Animate between frames
4. Document timing and easing preferences

#### Micro-interaction States
1. **Button states**: Default, Hover, Pressed, Disabled
2. **Card states**: Default, Hover, Selected
3. **Progress states**: Empty, Filling, Complete

### Data Visualization

#### Chart Components
1. **Bar Charts**:
   - Create rectangle components for bars
   - Use auto layout for consistent spacing
   - Color-code by category
   - Add data labels as text components

2. **Progress Rings**:
   - Create using stroke and arc tools
   - Multiple stroke weights for depth
   - Animate with rotation properties
   - Add percentage text in center

3. **Trend Lines**:
   - Use vector paths for smooth curves
   - Apply gradient strokes
   - Add data points as circles
   - Include hover state indicators

### Component Organization

#### Library Structure
```
📁 Design System
  📁 Colors
  📁 Typography
  📁 Spacing
  📁 Icons
  
📁 Base Components
  📁 Buttons
  📁 Cards
  📁 Forms
  📁 Navigation
  
📁 Feature Components
  📁 Mobile Slides
  📁 Desktop Slides
  📁 Data Visualizations
  📁 iPhone Mockups

📁 Templates
  📁 Mobile Layouts
  📁 Desktop Layouts
  📁 Complete Pages
```

#### Naming Conventions
- **Components**: PascalCase (e.g., "MobileTotalSpendingSlide")
- **Variants**: kebab-case (e.g., "primary", "secondary")
- **Instances**: Descriptive names (e.g., "Q4 Spending Summary")
- **Layers**: Clear hierarchy (e.g., "Content/Header/Title")

### Export Settings

#### For Development Handoff
1. **2x PNG exports** for high-DPI screens
2. **SVG exports** for icons and simple graphics
3. **CSS code generation** for gradients and effects
4. **Spacing measurements** with Figma Dev Mode

#### For Presentation
1. **PDF exports** of complete layouts
2. **High-resolution PNGs** for marketing
3. **Figma Prototype links** for interactive demos

## Quality Checklist

### Design Consistency
- [ ] All colors match design tokens exactly
- [ ] Typography hierarchy is consistent
- [ ] Spacing follows 8px grid system
- [ ] Border radius values are consistent
- [ ] Gradients match brand specifications

### Component Quality
- [ ] All components have proper names
- [ ] Properties are set up correctly
- [ ] Variants cover all necessary states
- [ ] Documentation is complete
- [ ] Components are organized logically

### Layout Accuracy
- [ ] iPhone mockup dimensions are exact
- [ ] Mobile slides fit properly in mockup
- [ ] Desktop grid layout matches code
- [ ] Responsive behavior is documented
- [ ] All interactive elements are defined

### Data & Content
- [ ] All financial data is realistic
- [ ] Currency formatting is consistent (£)
- [ ] Categories match code implementation
- [ ] Action recommendations are complete
- [ ] Legal/compliance text included

---

## Figma File Template

Use this structure for your Figma file:

### Page 1: Design System
- Color palette with variables
- Typography scale
- Spacing system
- Component library

### Page 2: iPhone Mockups
- Individual mobile slide designs
- Complete mobile flow
- Interactive prototype connections

### Page 3: Desktop Layouts
- Individual desktop slides
- Grid layout variations
- Responsive breakpoints

### Page 4: Data Visualizations
- Chart components
- Progress indicators
- Trend visualizations
- Interactive states

### Page 5: Complete Layouts
- Full app mockups
- Marketing presentations
- User flow diagrams

This systematic approach will ensure your Figma recreation matches your code implementation exactly while providing a solid foundation for future design iterations.