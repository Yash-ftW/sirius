from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
import joblib
import json
import pandas as pd
from django.core.files.storage import FileSystemStorage
from rest_framework.decorators import api_view
from rest_framework.response import Response
from MLModel.generateModel import generateModel

model=joblib.load('model1.pkl')

def predictMarks(request):
    data=json.loads(request.body)
    dataf=pd.DataFrame({'x':data}).transpose()
    output=model.predict(dataf)
    output=list(output)
    outputf=pd.Series(output).to_json(orient='values')
    print(outputf)
    return JsonResponse({'score':outputf})

def predictFile(request):
    return JsonResponse({'score':1})


@api_view(['POST'])
def buildModel(request):
    fileObj=request.FILES['filePath']
    fs=FileSystemStorage()
    filePathName=fs.save(fileObj.name,fileObj)
    filePathName=fs.url(filePathName)
    filePath='.'+filePathName
    
    data=pd.read_excel(filePath)
  
    model,score=generateModel(data)
    print("SCORE \n \n")
    joblib.dump(model,f'{filePath}model1.pkl')
    
    score=float(score)
    
    
    return Response({'score':score})
    