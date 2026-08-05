#!/bin/bash

echo "=========================================="
echo "Current directory: $(pwd)"
echo "=========================================="

if [ ! -f "package.json" ]; then
  echo "⚠️  No package.json found here. Are you in the portfolio-v2 project root?"
  exit 1
fi

echo "Creating folder structure inside src/..."

mkdir -p src/components
mkdir -p src/data

# Component files (empty placeholders, ready to fill in)
components=(
  "Navbar"
  "HeroSection"
  "AboutSection"
  "StrengthsSection"
  "ExperienceSection"
  "ProjectsSection"
  "ResearchSection"
  "SkillsSection"
  "CertificationsSection"
  "AchievementsSection"
  "EducationSection"
  "ContactSection"
  "Footer"
)

for name in "${components[@]}"; do
  file="src/components/${name}.tsx"
  if [ -f "$file" ]; then
    echo "  [Skipped, already exists] $file"
  else
    cat > "$file" << EOF
export const ${name} = () => {
  return (
    <div>
      {/* TODO: build ${name} */}
    </div>
  );
};
EOF
    echo "  [Created] $file"
  fi
done

# Data file
if [ -f "src/data/portfolioData.ts" ]; then
  echo "  [Skipped, already exists] src/data/portfolioData.ts"
else
  cat > "src/data/portfolioData.ts" << 'EOF'
// Central content file for the portfolio.
// Fill each of these in with your actual content.

export const PROJECTS = [
  // TODO: add project objects here
];

export const EXPERIENCE = [
  // TODO: add experience objects here
];

export const SKILLS = [
  // TODO: add skill category objects here
];

export const CERTIFICATIONS = [
  // TODO: add certification objects here
];

export const ACHIEVEMENTS = [
  // TODO: add achievement objects here
];

export const EDUCATION = [
  // TODO: add education objects here
];
EOF
  echo "  [Created] src/data/portfolioData.ts"
fi

echo ""
echo "✅ Done. Structure created inside: $(pwd)/src"