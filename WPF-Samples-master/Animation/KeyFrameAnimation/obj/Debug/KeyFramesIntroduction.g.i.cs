﻿#pragma checksum "..\..\KeyFramesIntroduction.xaml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "53EEF888A83D551C79ABEDD9575B41F86E98C545"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace KeyFrameAnimation {
    
    
    /// <summary>
    /// KeyFramesIntroduction
    /// </summary>
    public partial class KeyFramesIntroduction : System.Windows.Controls.Page, System.Windows.Markup.IComponentConnector {
        
        
        #line 20 "..\..\KeyFramesIntroduction.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Image myImage;
        
        #line default
        #line hidden
        
        
        #line 25 "..\..\KeyFramesIntroduction.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Shapes.Rectangle myRectangle;
        
        #line default
        #line hidden
        
        
        #line 47 "..\..\KeyFramesIntroduction.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Media.VisualBrush myVisualBrush;
        
        #line default
        #line hidden
        
        
        #line 123 "..\..\KeyFramesIntroduction.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBlock FirstLinearTextBlock;
        
        #line default
        #line hidden
        
        
        #line 124 "..\..\KeyFramesIntroduction.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBlock FirstSplineTextBlock;
        
        #line default
        #line hidden
        
        
        #line 125 "..\..\KeyFramesIntroduction.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBlock SecondLinearTextBlock;
        
        #line default
        #line hidden
        
        
        #line 126 "..\..\KeyFramesIntroduction.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBlock ThirdLinearTextBlock;
        
        #line default
        #line hidden
        
        
        #line 127 "..\..\KeyFramesIntroduction.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBlock SecondSplineTextBlock;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/KeyFrameAnimation;component/keyframesintroduction.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\KeyFramesIntroduction.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            
            #line 7 "..\..\KeyFramesIntroduction.xaml"
            ((KeyFrameAnimation.KeyFramesIntroduction)(target)).Loaded += new System.Windows.RoutedEventHandler(this.PageLoaded);
            
            #line default
            #line hidden
            return;
            case 2:
            
            #line 18 "..\..\KeyFramesIntroduction.xaml"
            ((System.Windows.Controls.Canvas)(target)).LayoutUpdated += new System.EventHandler(this.ExampleCanvasLayoutUpdated);
            
            #line default
            #line hidden
            return;
            case 3:
            this.myImage = ((System.Windows.Controls.Image)(target));
            return;
            case 4:
            this.myRectangle = ((System.Windows.Shapes.Rectangle)(target));
            return;
            case 5:
            this.myVisualBrush = ((System.Windows.Media.VisualBrush)(target));
            return;
            case 6:
            this.FirstLinearTextBlock = ((System.Windows.Controls.TextBlock)(target));
            return;
            case 7:
            this.FirstSplineTextBlock = ((System.Windows.Controls.TextBlock)(target));
            return;
            case 8:
            this.SecondLinearTextBlock = ((System.Windows.Controls.TextBlock)(target));
            return;
            case 9:
            this.ThirdLinearTextBlock = ((System.Windows.Controls.TextBlock)(target));
            return;
            case 10:
            this.SecondSplineTextBlock = ((System.Windows.Controls.TextBlock)(target));
            return;
            }
            this._contentLoaded = true;
        }
    }
}

