//
//  ReactManager.swift
//  CcmcRN
//
//  Created by Vinoth on 2/24/17.
//  Copyright © 2017 Kovan. All rights reserved.
//

import UIKit
import React

@objc(ReactManager)
class ReactManager: RCTEventEmitter {
    
    override func supportedEvents() -> [String]! {
        return ["ReactEvents"]
    }
    
    @objc func dismissPresentedViewController(_ reactTag: NSNumber) {
        DispatchQueue.main.async {
            
            if let view = self.bridge.uiManager.view(forReactTag: reactTag) {
                let presentedViewController: UIViewController = view.reactViewController()
                
                presentedViewController.dismiss(animated: true, completion: nil)
            }
        }
        
    }
    
    @objc func save(_ reactTag: NSNumber, data: String) {
        
        dismissPresentedViewController(reactTag)
        
        print("data : ", data)
        
        self.sendEvent(
            withName: "ReactEvents",
            body: ["name": "Vinoth", "message": data, "extra": "007"])
        
    }
}

