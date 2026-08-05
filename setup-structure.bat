@echo off
setlocal enabledelayedexpansion

echo ==========================================
echo Current directory: %CD%
echo ==========================================

if not exist package.json (
  echo No package.json found here. Are you in the portfolio-v2 project root?
  exit /b 1
)

echo Creating folder structure inside src\...

if not exist src\components mkdir src\components
if not exist src\data mkdir src\data

set components=Navbar HeroSection AboutSection StrengthsSection ExperienceSection ProjectsSection ResearchSection SkillsSection CertificationsSection AchievementsSection EducationSection ContactSection Footer

for %%C in (%components%) do (
  if exist src\components\%%C.tsx (
    echo   [Skipped, already exists] src\components\%%C.tsx
  ) else (
    (
      echo export const %%C = ^(^) =^> {
      echo   return ^(
      echo     ^<div^>
      echo       {/* TODO: build %%C */}
      echo     ^</div^>
      echo   ^);
      echo };
    ) > src\components\%%C.tsx
    echo   [Created] src\components\%%C.tsx
  )
)

if exist src\data\portfolioData.ts (
  echo   [Skipped, already exists] src\data\portfolioData.ts
) else (
  (
    echo // Central content file for the portfolio.
    echo // Fill each of these in with your actual content.
    echo.
    echo export const PROJECTS = [
    echo   // TODO: add project objects here
    echo ];
    echo.
    echo export const EXPERIENCE = [
    echo   // TODO: add experience objects here
    echo ];
    echo.
    echo export const SKILLS = [
    echo   // TODO: add skill category objects here
    echo ];
    echo.
    echo export const CERTIFICATIONS = [
    echo   // TODO: add certification objects here
    echo ];
    echo.
    echo export const ACHIEVEMENTS = [
    echo   // TODO: add achievement objects here
    echo ];
    echo.
    echo export const EDUCATION = [
    echo   // TODO: add education objects here
    echo ];
  ) > src\data\portfolioData.ts
  echo   [Created] src\data\portfolioData.ts
)

echo.
echo Done. Structure created inside: %CD%\src