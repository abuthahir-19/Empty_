import speech_recognition as SR

def get_command () :
    input_command = SR.Recognizer ()
    with SR.Microphone () as source:
        print ('Listening....')
        input_command.pause_thershold = 1 
        audio = input_command.listen(source) 
    try:
        print ('Recognizing...') 
        query = input_command.recognize_google (audio, language = 'en-in')
        print (query)
    except Exception as e:
        print (e)
        speak ('say that again please') 
        return 'none'
    return query 
get_command ()