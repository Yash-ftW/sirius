def generateModel(df):
    from sklearn.model_selection import train_test_split
    from sklearn.multioutput import MultiOutputRegressor
    from sklearn.neighbors import KNeighborsRegressor
    from sklearn.tree import DecisionTreeRegressor
    from sklearn.model_selection import GridSearchCV
    from sklearn.svm import SVR
    from sklearn.ensemble import RandomForestRegressor
   
    
    df['Sex']=df['Sex'].apply(lambda x: 1 if x == 'female' else 0)
    df['Pass']=df['Pass'].apply(lambda x: 0 if x=='fail' else 1)
    df['Pass_Final']=df['Pass_Final'].apply(lambda x: 0 if x=='fail' else 1)
    
    x=df.iloc[:,1:19].values
    y=df.iloc[:,19:24].values
    
    x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.3,random_state=20)
    
    x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.3,random_state=20)
    
    params={
    'knn': {    'n_neighbors':[3,5,7,9,11,13,15],
                'metric':['cosine','euclidean','manhattan'],
                'weights':['uniform','distance']
    },
    'dtr':{
        'splitter':['best','random'],
        'max_depth' : [9,11,12],
        
        'max_leaf_nodes':[40,50,60,70]
    },
    
    'mor':{
        'n_jobs': [-1],
    },
    'rf':{
        
        'criterion':['squared_error', 'absolute_error', 'poisson'],
        'max_depth' : [9,11,12],
        'max_leaf_nodes':[40,50,60,70],
        
    }
   
    }
    
    knn=KNeighborsRegressor()
    dtr=DecisionTreeRegressor()
    mor= MultiOutputRegressor(SVR(),n_jobs=-1)
    rf=RandomForestRegressor()
    
    models={'knn':knn,'dtr':dtr,'mor':mor,'rf':rf}
    model_accuracy={}
    score=0.0001
    for model in models.keys():
        
        mod = GridSearchCV(
        models[model],
        params[model],
        verbose=0, #Progress bar showing
        cv=len(x_train), #cross validation
        n_jobs=-1, #cores to assign
    )
        
        gridsearch_result=mod.fit(x_train,y_train)
        
        if(score < float(gridsearch_result.score(x_test,y_test))):
            score=gridsearch_result.score(x_test,y_test)
            gridsearch=gridsearch_result.fit(x_train,y_train)
        if model not in model_accuracy.keys():
            model_accuracy.update({model:gridsearch_result.score(x_test,y_test)})
    
    score=gridsearch.score(x_test,y_test)
    return gridsearch,score