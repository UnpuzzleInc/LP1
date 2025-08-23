In this logs folder, claude code AI will start from this document. It will analyze other folds within the logs folder in terms of how the filenames are structured. If it doesnt know the time, it will ask it.
 
Structuring folders: YYYY-MM-DD - Year month day. For example 2025-08-09 is today's date. A folder needs to be created and then inside that folder a md file needs to be created.
 
md file name structure:
1-Time-Description of file
2-Time-Description of file
3-Time-Description of file
 
MAKE SURE TO ENSURE EACH FILE YOU CREATE IN THE LOGS FOLDER IS NUMBERED WITH A DATE AND DESCRIPTION OF THE FILE. ALSO INCLUDE IN THE FILE AT THE TOP THE DATE AND TIME AND DESCRIPTION ALONG WITH THE FACT THAT NEW FILE CREATION NEED TO ADHERE TO THIS FORMAT. RUN BASH COMMAND TO GET ACCURATE TIME.   
TZ=America/New_York date "+%Y-%m-%d %I:%M%p"
 
Time should always be in EST.
 
Example:
1-0905AM-Refactoring the code analysis