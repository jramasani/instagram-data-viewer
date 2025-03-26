# Instagram Data Viewer 🔒

A privacy-focused web tool that helps you analyze your Instagram connections data directly in your browser. All data processing happens locally - nothing is uploaded to any server.

## 🌟 Features

- **Followers Analysis**: See who follows you and when they started following
- **Following Analysis**: Track who you follow and when you followed them
- **Ghost Followers**: Identify users who don't follow you back
- **Blocked Users**: View your blocked accounts list
- **Restricted Users**: See your restricted accounts
- **Network Visualization**: Interactive graph showing your Instagram connections
- **Privacy Focused**: All processing happens in your browser
- **Search & Sort**: Easy filtering and sorting of all lists
- **Responsive Design**: Works on desktop and mobile devices

## 🔒 Privacy

This tool is designed with privacy as the top priority:
- No data is ever uploaded to any server
- All processing happens locally in your browser
- Works offline after initial page load
- No cookies or tracking
- Open source for transparency

## 🚀 Getting Started

1. **Request Your Instagram Data**:
   - Open Instagram
   - Go to Settings > Privacy and Security
   - Select "Download Data"
   - Choose JSON format (important!)
   - Wait for Instagram to email you the data (can take up to 48 hours)

2. **Use the Tool**:
   - Visit the tool website or open index.html locally
   - Upload your Instagram data ZIP file
   - View your analysis instantly

## 💻 Technical Details

### Dependencies

- **JSZip**: For handling ZIP file processing
- **D3.js**: For network visualization
- No backend required!

### File Structure 

├── index.html      # Main application
├── privacy.html    # Privacy policy
└── README.md       # Documentation

## 🕸️ Network Visualization

The network visualization feature provides an interactive graph of your Instagram connections:

1. **Access**: 
   - After uploading your data, click the "Interactive Network" card in the stats section
   - Or click the network icon in the top stats area

2. **Features**:
   - Interactive zoom and pan
   - Drag nodes to rearrange
   - Hover over nodes to see usernames
   - Color-coded connections:
     - 🔵 Blue: You (center node)
     - 🟢 Green: Mutual connections (they follow you, you follow them)
     - 🟡 Orange: Following only (you follow them)
     - 🔴 Red: Followers only (they follow you)
     - 🟣 Purple: Blocked users

3. **Controls**:
   - Use the zoom slider to adjust zoom level
   - Use the link distance slider to adjust node spacing
   - Click and drag nodes to reposition them
   - Click and drag the background to pan
   - Close using the × button in the top right 