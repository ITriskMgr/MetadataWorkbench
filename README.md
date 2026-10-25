# Metadata Workbench

**Inspect, compare, verify and safely edit file metadata on macOS** — for cybersecurity, digital forensics, data
governance and privacy clean-up before sharing. Free to use.

**Inspecter, comparer, vérifier et éditer de façon sécuritaire les métadonnées de fichiers sur macOS** — pour la
cybersécurité, la forensique numérique, la gouvernance des données et le nettoyage avant partage. Gratuit.

➡️ **Project page / Page du projet : https://www.leger.ca/metadata-workbench/**

## Download / Télécharger

[**MetadataWorkbench-macOS.dmg** (latest release / dernière version)](https://github.com/ITriskMgr/MetadataWorkbench/releases/latest/download/MetadataWorkbench-macOS.dmg)
· [All releases and SHA-256 checksums / Toutes les versions et sommes de contrôle](https://github.com/ITriskMgr/MetadataWorkbench/releases)

Requirements / Configuration requise: Mac with Apple silicon (M1 or later) · macOS 15 Sequoia or later.
Optional / Facultatif: `brew install ffmpeg` for audio and video.

## Install (short version)

1. Open the `.dmg` and drag **Metadata Workbench** onto **Applications**.
2. Open the app once; macOS says it cannot verify it — click **Done**.
3. **System Settings ▸ Privacy & Security ▸ Open Anyway**, then confirm.
   Or in Terminal: `xattr -dr com.apple.quarantine "/Applications/Metadata Workbench.app"`
4. **Help ▸ Run self-test (offline)…** should report PASS for every check.

The app is ad-hoc signed (no paid Apple Developer ID), which is why step 3 is needed once per version.

## Installation (version courte)

1. Ouvrez le `.dmg` et glissez **Metadata Workbench** sur **Applications**.
2. Ouvrez l'application une fois; macOS indique qu'il ne peut pas la vérifier — cliquez sur **Terminé**.
3. **Réglages Système ▸ Confidentialité et sécurité ▸ Ouvrir quand même**, puis confirmez.
   Ou dans le Terminal : `xattr -dr com.apple.quarantine "/Applications/Metadata Workbench.app"`
4. **Help ▸ Run self-test (offline)…** doit indiquer PASS pour chaque vérification.

## Documentation

- Installation guide / Guide d'installation: [web](https://www.leger.ca/metadata-workbench/install.html) ·
  [PDF](docs/MetadataWorkbench-Install-EN-FR.pdf)
- User guide / Guide d'utilisation: [web](https://www.leger.ca/metadata-workbench/guide.html) ·
  [PDF](docs/MetadataWorkbench-UserGuide-EN-FR.pdf)

## Licence

Free to use, as-is, without warranty; no redistribution or modification. Third-party components keep their own
licences. See [LICENSE.txt](LICENSE.txt).
Gratuit, tel quel, sans garantie; aucune redistribution ni modification. Voir [LICENSE.txt](LICENSE.txt).

This repository hosts releases and documentation only. / Ce dépôt héberge uniquement les versions et la documentation.

Issues and questions / Problèmes et questions: [GitHub Issues](https://github.com/ITriskMgr/MetadataWorkbench/issues)

© 2026 Marc-André Léger
